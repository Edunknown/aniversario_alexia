import { useEffect, useMemo, useState } from "react";

interface UseTypewriterOptions {
	text: string;
	step?: number;
	interval?: number;
}

export function useTypewriter({ text, step = 2, interval = 35 }: UseTypewriterOptions) {
	const [visibleChars, setVisibleChars] = useState(0);

	useEffect(() => {
		setVisibleChars(0);

		const intervalId = window.setInterval(() => {
			setVisibleChars((current) => {
				if (current >= text.length) {
					window.clearInterval(intervalId);
					return current;
				}

				return current + step;
			});
		}, interval);

		return () => window.clearInterval(intervalId);
	}, [interval, step, text]);

	const displayedText = useMemo(() => text.slice(0, visibleChars), [text, visibleChars]);

	return {
		displayedText,
		visibleChars,
		isComplete: visibleChars >= text.length,
	};
}
