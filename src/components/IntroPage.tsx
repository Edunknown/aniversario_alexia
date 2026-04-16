import { motion } from "motion/react";
import texts from "../data/texts";

interface IntroPageProps {
	onEnter: () => void;
}

export function IntroPage({ onEnter }: IntroPageProps) {
	return (
		<div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface px-6">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(252,180,180,0.22),_transparent_32%),linear-gradient(180deg,_rgba(247,243,237,0.92),_rgba(253,249,243,1))]" />
			<motion.button
				type="button"
				onClick={onEnter}
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ y: -2 }}
				whileTap={{ scale: 0.98 }}
				className="relative z-10 rounded-full border border-primary/20 bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-surface shadow-[0_20px_50px_rgba(134,79,80,0.22)] transition-colors duration-300 hover:bg-[#774445]"
			>
				{texts.intro.cta}
			</motion.button>
		</div>
	);
}
