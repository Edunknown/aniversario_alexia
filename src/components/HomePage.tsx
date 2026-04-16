import { Closing } from "./Closing";
import { Gallery } from "./Gallery";
import { Hero } from "./Hero";
import { StoryQuote } from "./StoryQuote";

export function HomePage() {
	return (
		<main>
			<Hero />
			<StoryQuote />
			<Gallery />
			<Closing />
		</main>
	);
}
