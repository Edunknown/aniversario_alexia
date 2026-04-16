import type { ReactNode } from "react";

interface SectionHeadingProps {
	title: string;
	description?: string;
	leading?: ReactNode;
	showDivider?: boolean;
	className?: string;
}

export function SectionHeading({
	title,
	description,
	leading,
	showDivider = false,
	className = "",
}: SectionHeadingProps) {
	return (
		<div className={`text-center ${className}`.trim()}>
			{leading ? <div className="mb-6 flex justify-center">{leading}</div> : null}
			<div className="space-y-6">
				<h2 className="font-serif text-4xl leading-tight text-on-surface">{title}</h2>
				{description ? <p className="text-lg leading-relaxed text-on-surface-variant">{description}</p> : null}
				{showDivider ? <div className="mx-auto h-px w-16 bg-primary-fixed-dim" /> : null}
			</div>
		</div>
	);
}
