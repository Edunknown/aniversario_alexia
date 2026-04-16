import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import texts from "../data/texts";

export function Hero() {
	return (
		<section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-8 text-center">
			<div className="absolute inset-0 z-0">
				<img
					src="/images/portada.jpeg"
					alt={texts.hero.backgroundAlt}
					className="h-full w-full object-cover opacity-30"
					referrerPolicy="no-referrer"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
			</div>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
				className="relative z-10 space-y-6"
			>
				<span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-primary">
					{texts.hero.label}
				</span>
				<h1 className="font-serif text-6xl leading-tight tracking-tighter text-on-surface md:text-8xl">
					{texts.hero.names.first} <span className="serif font-normal italic">&amp;</span>{" "}
					{texts.hero.names.second}
				</h1>
				<p className="font-serif text-xl italic text-on-surface-variant">{texts.hero.date}</p>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="flex justify-center pt-12"
				>
					<ChevronDown className="h-6 w-6 text-primary-fixed-dim" />
				</motion.div>
			</motion.div>
		</section>
	);
}
