import { motion } from "motion/react";
import { Quote } from "lucide-react";
import texts from "../data/texts";
import { MemoryCard } from "./MemoryCard";
import { SectionHeading } from "./SectionHeading";

export function StoryQuote() {
	return (
		<section className="bg-surface-container-low px-8 py-32">
			<div className="mx-auto max-w-xl space-y-16 text-center">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="space-y-6"
				>
					<SectionHeading
						title={texts.storyQuote.title}
						description={texts.storyQuote.body}
						leading={<Quote className="h-10 w-10 rotate-180 text-primary-fixed-dim" />}
					/>
				</motion.div>

				<MemoryCard />
			</div>
		</section>
	);
}
