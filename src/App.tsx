/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AudioToggle } from "./components/AudioToggle";
import { IntroPage } from "./components/IntroPage";
import { HOME_ROUTE } from "./constants/routes";
import { useBackgroundAudio } from "./hooks/useBackgroundAudio";
import { AppRoutes } from "./routes";

export default function App() {
	const [hasEntered, setHasEntered] = useState(false);
	const { pathname } = useLocation();
	const isHomeRoute = pathname === HOME_ROUTE;
	const { audioRef, isAudioManuallyPaused, toggleAudio } = useBackgroundAudio({ hasEntered, isHomeRoute });

	return (
		<div className="min-h-screen">
			<audio ref={audioRef} src="/media/music.mp3" autoPlay loop preload="auto" className="hidden" />
			{hasEntered && isHomeRoute ? <AudioToggle isPaused={isAudioManuallyPaused} onToggle={toggleAudio} /> : null}
			{!hasEntered ? <IntroPage onEnter={() => setHasEntered(true)} /> : <AppRoutes />}
		</div>
	);
}
