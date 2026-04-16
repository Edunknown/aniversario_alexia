import texts from "../data/texts";
import { galleryMedia } from "../data/galleryMedia";
import { MediaCard } from "./MediaCard";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
	const leftColumn = galleryMedia.slice(0, 3);
	const rightColumn = galleryMedia.slice(3);

	return (
		<section className="bg-surface px-4 py-32">
			<div className="mx-auto max-w-4xl">
				<SectionHeading title={texts.gallery.title} showDivider className="mb-20" />

				<div className="grid grid-cols-2 gap-4 md:gap-8">
					<div className="space-y-4 md:space-y-8">
						{leftColumn.map((item, index) => (
							<MediaCard key={item.src} item={item} delay={index * 0.1} />
						))}
					</div>
					<div className="space-y-4 pt-12 md:space-y-8 md:pt-24">
						{rightColumn.map((item, index) => (
							<MediaCard key={item.src} item={item} delay={(index + leftColumn.length) * 0.1} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
