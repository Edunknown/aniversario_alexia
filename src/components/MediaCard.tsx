import { motion } from "motion/react";
import texts from "../data/texts";
import type { MediaItem } from "../types/content";

interface MediaCardProps {
	item: MediaItem;
	delay: number;
}

export function MediaCard({ item, delay }: MediaCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay }}
			className={`overflow-hidden rounded-xl bg-surface-container-high transition-shadow duration-500 hover:shadow-lg ${item.aspect}`}
		>
			{item.type === "video" ? (
				<video
					src={item.src}
					className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
				/>
			) : (
				<img
					src={item.src}
					alt={item.alt ?? texts.gallery.imageAlt}
					className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
					referrerPolicy="no-referrer"
				/>
			)}
		</motion.div>
	);
}
