export type MediaType = "image" | "video";

export interface MediaItem {
	src: string;
	aspect: string;
	type: MediaType;
	alt?: string;
}

export interface IntroContent {
	cta: string;
}

export interface HeroContent {
	label: string;
	names: {
		first: string;
		second: string;
	};
	date: string;
	backgroundAlt: string;
}

export interface StoryQuoteContent {
	title: string;
	body: string;
	card: {
		imageAlt: string;
		title: string;
		body: string;
	};
}

export interface GalleryContent {
	title: string;
	imageAlt: string;
}

export interface ClosingContent {
	title: string;
	subtitle: string;
	cta: string;
}

export interface LetterContent {
	backLabel: string;
	eyebrow: string;
	badge: string;
	title: string;
	subtitle: string;
	footerCta: string;
	paragraphs: string[];
}

export interface AppTexts {
	intro: IntroContent;
	hero: HeroContent;
	storyQuote: StoryQuoteContent;
	gallery: GalleryContent;
	closing: ClosingContent;
	letter: LetterContent;
}
