import { motion } from "motion/react";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../constants/routes";
import texts from "../data/texts";
import { useTypewriter } from "../hooks/useTypewriter";

const letterText = texts.letter.paragraphs.join("\n\n");

export function LetterPage() {
	const navigate = useNavigate();
	const { displayedText, isComplete } = useTypewriter({ text: letterText });

	return (
		<div className="relative min-h-screen overflow-hidden bg-surface px-4 py-8 md:px-8 md:py-12">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(252,180,180,0.35),_transparent_38%),linear-gradient(180deg,_rgba(247,243,237,0.9),_rgba(253,249,243,1))]" />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,_rgba(134,79,80,0.14),_transparent)]" />
			<div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center gap-8">
				<div className="flex items-center justify-between gap-4">
					<motion.button
						type="button"
						onClick={() => navigate(HOME_ROUTE)}
						whileHover={{ x: -4 }}
						className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
					>
						<ArrowLeft className="h-4 w-4" />
						{texts.letter.backLabel}
					</motion.button>
					<p className="text-right text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
						{texts.letter.eyebrow}
					</p>
				</div>

				<motion.section
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="letter-paper relative overflow-hidden rounded-[2rem] border border-white/50 px-6 py-8 shadow-[0_30px_80px_rgba(91,58,59,0.12)] md:px-12 md:py-14"
				>
					<div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(134,79,80,0.35),transparent)]" />
					<div className="mb-10 space-y-4 text-center">
						<span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
							<Sparkles className="h-3.5 w-3.5" />
							{texts.letter.badge}
						</span>
						<h1 className="font-serif text-4xl leading-tight text-on-surface md:text-6xl">
							{texts.letter.title}
						</h1>
						<p className="mx-auto max-w-2xl text-sm leading-relaxed text-on-surface-variant md:text-base">
							{texts.letter.subtitle}
						</p>
					</div>

					<div className="mx-auto max-w-3xl rounded-[1.75rem] border border-primary/10 bg-white/55 px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-sm md:px-8 md:py-10">
						<p className="whitespace-pre-wrap font-serif text-lg leading-[2] text-on-surface md:text-[1.35rem] md:leading-[2.1]">
							{displayedText}
							{!isComplete ? <span className="type-caret" aria-hidden="true" /> : null}
						</p>
					</div>

					<div className="mt-10 flex justify-center">
						<motion.button
							type="button"
							onClick={() => navigate(HOME_ROUTE)}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
							className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-surface px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(134,79,80,0.08)]"
						>
							<Heart className="h-4 w-4 fill-primary" />
							{texts.letter.footerCta}
						</motion.button>
					</div>
				</motion.section>
			</div>
		</div>
	);
}
