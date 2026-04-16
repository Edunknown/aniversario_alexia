import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LETTER_ROUTE } from "../constants/routes";
import texts from "../data/texts";

export function Closing() {
	const navigate = useNavigate();

	return (
		<section className="bg-surface-container-low px-8 py-40 text-center">
			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				viewport={{ once: true }}
				className="mx-auto max-w-md space-y-8"
			>
				<Heart className="mx-auto h-16 w-16 fill-primary text-primary" />
				<h2 className="font-serif text-5xl italic leading-tight text-on-surface">{texts.closing.title}</h2>
				<p className="font-serif italic text-on-surface-variant opacity-80">{texts.closing.subtitle}</p>
				<motion.button
					type="button"
					onClick={() => navigate(LETTER_ROUTE)}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.98 }}
					className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-surface shadow-[0_16px_40px_rgba(134,79,80,0.2)] transition-colors duration-300 hover:bg-[#774445]"
				>
					<Sparkles className="h-4 w-4" />
					{texts.closing.cta}
				</motion.button>
			</motion.div>
		</section>
	);
}
