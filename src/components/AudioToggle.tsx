import { motion } from "motion/react";
import { Pause, Play } from "lucide-react";

interface AudioToggleProps {
	isPaused: boolean;
	onToggle: () => void;
}

export function AudioToggle({ isPaused, onToggle }: AudioToggleProps) {
	return (
		<motion.button
			type="button"
			onClick={onToggle}
			whileHover={{ y: -2 }}
			whileTap={{ scale: 0.97 }}
			aria-label={isPaused ? "Reanudar música" : "Pausar música"}
			className="fixed left-4 top-4 z-50 inline-flex items-center gap-3 rounded-full border border-primary/15 bg-surface/85 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_14px_35px_rgba(134,79,80,0.14)] backdrop-blur-md md:left-6 md:top-6"
		>
			{isPaused ? <Play className="h-4 w-4 fill-current" /> : <Pause className="h-4 w-4" />}
			<span>{isPaused ? "Reanudar" : "Pausar"}</span>
		</motion.button>
	);
}
