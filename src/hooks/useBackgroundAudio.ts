import { useEffect, useRef, useState } from "react";

interface UseBackgroundAudioOptions {
	hasEntered: boolean;
	isHomeRoute: boolean;
	volume?: number;
}

export function useBackgroundAudio({ hasEntered, isHomeRoute, volume = 0.6 }: UseBackgroundAudioOptions) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isAudioManuallyPaused, setIsAudioManuallyPaused] = useState(false);

	useEffect(() => {
		const audio = audioRef.current;

		if (!audio) {
			return;
		}

		const tryPlay = () => {
			if (isAudioManuallyPaused) {
				return;
			}

			void audio.play().catch(() => {
				// Some browsers block autoplay with sound until the first user interaction.
			});
		};

		const handleCanPlay = () => {
			tryPlay();
		};

		if (hasEntered && isHomeRoute) {
			audio.volume = volume;
			tryPlay();
			audio.addEventListener("canplay", handleCanPlay);

			const unlockAudio = () => {
				tryPlay();
			};

			window.addEventListener("pointerdown", unlockAudio, { once: true });
			window.addEventListener("keydown", unlockAudio, { once: true });

			return () => {
				audio.removeEventListener("canplay", handleCanPlay);
				window.removeEventListener("pointerdown", unlockAudio);
				window.removeEventListener("keydown", unlockAudio);
			};
		}

		audio.pause();
	}, [hasEntered, isAudioManuallyPaused, isHomeRoute, volume]);

	const toggleAudio = () => {
		const audio = audioRef.current;

		if (!audio) {
			return;
		}

		if (audio.paused || isAudioManuallyPaused) {
			setIsAudioManuallyPaused(false);
			void audio.play().catch(() => {
				// Playback can still be blocked by the browser until interaction is allowed.
			});
			return;
		}

		audio.pause();
		setIsAudioManuallyPaused(true);
	};

	return {
		audioRef,
		isAudioManuallyPaused,
		toggleAudio,
	};
}
