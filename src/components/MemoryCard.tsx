import { motion } from "motion/react";
import texts from "../data/texts";

export function MemoryCard() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			className="group relative mt-20 cursor-pointer text-left"
		>
			<div className="aspect-[4/5] w-full overflow-hidden rounded-xxl shadow-sm transition-transform duration-700 group-hover:scale-105">
				<img
					src="/images/ninos.jpeg"
					alt={texts.storyQuote.card.imageAlt}
					className="h-full w-full object-cover object-top"
					referrerPolicy="no-referrer"
				/>
			</div>
			<div className="glass absolute bottom-[-2rem] left-8 right-0 rounded-xl p-8 shadow-xl transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 md:left-24">
				<h3 className="mb-3 font-serif text-2xl italic text-primary">{texts.storyQuote.card.title}</h3>
				<p className="text-sm leading-relaxed text-on-surface-variant">{texts.storyQuote.card.body}</p>
			</div>
		</motion.div>
	);
}
