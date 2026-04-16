/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Heart, Quote, ChevronDown, ArrowLeft, Sparkles } from "lucide-react";

const LETTER_ROUTE = "#/carta";

const letterParagraphs = [
	"Hay historias que empiezan sin que nadie se dé cuenta... y la nuestra empezó mucho antes de que supiéramos lo que significaba querernos.",
	"Aún puedo imaginar aquel momento con 13 años, en el campo del Lauro. Yo patinando sin haberte visto a ti, tú entrenando, mirándome como si ya intuyeras algo que el tiempo todavía no nos dejaba vivir. Éramos solo dos niños, pero la vida, sin avisar, ya había cruzado nuestros caminos.",
	"Tuvieron que pasar años, otras historias, otros caminos... para que el destino nos volviera a encontrar cuando realmente estábamos preparados. Y entonces sí, el 18 de abril de 2022 empezó todo... pero la verdad es que, para mí, todo cambió un poco antes.",
	"Aquel viaje a Madrid, cuando fui a verte mientras estudiabas allí, fue el detonante de todo lo que sentía. En esos días contigo entendí algo que ya no pude ignorar: que te quería en mi vida de verdad. Venía de una ruptura que me había roto por dentro, en la que incluso llegué a perderme a mí misma... no estaba al cien por cien, no era mi mejor versión. Pero aun así, lo tuve claro. Costase lo que costase, quería apostar por ti.",
	"Porque en medio de todo ese caos, supe reconocer lo más importante: que eras tú, que era tú el amor de mi vida. Que no te quería a medias, ni con dudas, sino con una certeza que nacía desde lo más profundo de mí. Y decidí elegirte, incluso cuando aún estaba recomponiéndome.",
	"Lo nuestro no ha sido perfecto, pero ha sido verdadero. Hemos pasado por momentos difíciles, por días en los que todo pesaba más... y aun así, nunca has soltado mi mano. Has sido refugio, calma y fuerza cuando más lo he necesitado. Has sabido sostenerme incluso en mis peores días, cuando ni yo misma sabía cómo hacerlo.",
	"Eres mucho más que mi pareja. Eres mi hogar en forma de persona. Eres quien me hace reír cuando todo se nubla, quien me devuelve la luz cuando me pierdo en mis pensamientos, quien me entiende sin necesidad de palabras... incluso cuando también consigues sacarme de quicio, porque eso también forma parte de lo nuestro, de lo real, de lo vivo.",
	"Me emociona saber que no solo compartimos el presente, sino también los sueños. Imaginar una casa, una familia, una vida contigo... no es solo un deseo, es una certeza que nace de todo lo que somos.",
	"Gracias por tu forma de quererme, por tu empatía, por tu paciencia infinita y por no rendirte nunca conmigo. Gracias por ser mi amigo, mi compañero, mi lugar seguro.",
	"Hoy no solo celebro el día en que empezamos... celebro cada paso que nos trajo hasta aquí, cada caída que superamos juntos y cada momento que aún nos queda por vivir.",
	"Te quiero de una forma que no sabe irse.\nFeliz aniversario, mi vida.\nPor toda una vida juntos 🧩💜",
];

const letterText = letterParagraphs.join("\n\n");

const getCurrentRoute = () => (window.location.hash === LETTER_ROUTE ? "letter" : "home");

const Hero = () => (
	<section className="relative h-screen flex flex-col justify-center items-center px-8 text-center overflow-hidden">
		<div className="absolute inset-0 z-0">
			<img
				src="/images/portada.jpeg"
				alt="Romantic moment"
				className="w-full h-full object-cover opacity-30"
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
			<span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-semibold">
				Nuestro aniversario
			</span>
			<h1 className="text-6xl md:text-8xl font-serif font-bold text-on-surface tracking-tighter leading-tight">
				Alexia <span className="italic font-normal serif">&amp;</span> Pablo
			</h1>
			<p className="text-xl font-serif italic text-on-surface-variant">18.04.2022</p>
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
				className="pt-12 flex justify-center"
			>
				<ChevronDown className="w-6 h-6 text-primary-fixed-dim" />
			</motion.div>
		</motion.div>
	</section>
);

const StoryQuote = () => (
	<section className="py-32 px-8 bg-surface-container-low">
		<div className="max-w-xl mx-auto text-center space-y-16">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				className="space-y-6"
			>
				<Quote className="w-10 h-10 text-primary-fixed-dim mx-auto rotate-180" />
				<h2 className="text-4xl font-serif leading-tight text-on-surface">Cada momento contigo es un tesoro</h2>
				<p className="text-on-surface-variant leading-relaxed text-lg">
					Desde las tranquilas mañanas compartiendo café hasta las grandes aventuras por tierras lejanas, cada
					segundo ha quedado grabado en el legado de nuestra vida compartida.
				</p>
			</motion.div>

			{/* Memory Bloom Card */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="relative mt-20 text-left cursor-pointer group"
			>
				<div className="w-full aspect-[4/5] rounded-xxl overflow-hidden shadow-sm transition-transform duration-700 group-hover:scale-105">
					<img
						src="/images/ninos.jpeg"
						alt="The First Chapter"
						className="w-full h-full object-cover object-top"
						referrerPolicy="no-referrer"
					/>
				</div>
				<div className="absolute bottom-[-2rem] right-0 left-8 md:left-24 p-8 glass rounded-xl shadow-xl transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
					<h3 className="font-serif italic text-2xl mb-3 text-primary">El Primer Capítulo</h3>
					<p className="text-sm text-on-surface-variant leading-relaxed">
						Mirando hacia atrás en donde comenzamos, nunca imaginé lo hermosa que se volvería esta aventura.
						Por muchos más años juntos.
					</p>
				</div>
			</motion.div>
		</div>
	</section>
);

const Gallery = () => {
	const media = [
		{ src: "/images/video1.mp4", aspect: "aspect-square", type: "video" },
		{ src: "/images/imagen1.jpeg", aspect: "aspect-[3/4]", type: "image" },
		{ src: "/images/video2.mp4", aspect: "aspect-square", type: "video" },
		{ src: "/images/imagen2.jpeg", aspect: "aspect-[3/4]", type: "image" },
		{ src: "/images/video3.mp4", aspect: "aspect-square", type: "video" },
		{ src: "/images/imagen3.jpeg", aspect: "aspect-[4/5]", type: "image" },
	];

	return (
		<section className="py-32 px-4 bg-surface">
			<div className="max-w-4xl mx-auto">
				<div className="mb-20 text-center">
					<h2 className="text-3xl font-serif text-on-surface tracking-tight">Nuestra alegría en imágenes</h2>
					<div className="w-16 h-[1px] bg-primary-fixed-dim mx-auto mt-6" />
				</div>

				<div className="grid grid-cols-2 gap-4 md:gap-8">
					<div className="space-y-4 md:space-y-8">
						{media.slice(0, 3).map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className={`rounded-xl overflow-hidden ${item.aspect} bg-surface-container-high hover:shadow-lg transition-shadow duration-500`}
							>
								{item.type === "video" ? (
									<video
										src={item.src}
										className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
										autoPlay
										muted
										loop
										playsInline
										preload="metadata"
									/>
								) : (
									<img
										src={item.src}
										alt="Gallery"
										className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
										referrerPolicy="no-referrer"
									/>
								)}
							</motion.div>
						))}
					</div>
					<div className="space-y-4 md:space-y-8 pt-12 md:pt-24">
						{media.slice(3, 6).map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: (i + 3) * 0.1 }}
								className={`rounded-xl overflow-hidden ${item.aspect} bg-surface-container-high hover:shadow-lg transition-shadow duration-500`}
							>
								{item.type === "video" ? (
									<video
										src={item.src}
										className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
										autoPlay
										muted
										loop
										playsInline
										preload="metadata"
									/>
								) : (
									<img
										src={item.src}
										alt="Gallery"
										className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
										referrerPolicy="no-referrer"
									/>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const Closing = () => (
	<section className="py-40 px-8 bg-surface-container-low text-center">
		<motion.div
			initial={{ scale: 0.9, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true }}
			className="max-w-md mx-auto space-y-8"
		>
			<Heart className="w-16 h-16 text-primary mx-auto fill-primary" />
			<h2 className="text-5xl font-serif italic text-on-surface leading-tight">Por Siempre Tuya</h2>
			<p className="text-on-surface-variant italic font-serif opacity-80">Ayer, Hoy, y Cada Mañana.</p>
			<motion.a
				href={LETTER_ROUTE}
				whileHover={{ y: -2 }}
				whileTap={{ scale: 0.98 }}
				className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary px-7 py-3 text-sm font-semibold tracking-[0.2em] uppercase text-surface shadow-[0_16px_40px_rgba(134,79,80,0.2)] transition-colors duration-300 hover:bg-[#774445]"
			>
				<Sparkles className="h-4 w-4" />
				Leer la carta
			</motion.a>
		</motion.div>
	</section>
);

const LetterPage = () => {
	const [visibleChars, setVisibleChars] = useState(0);
	const displayedText = useMemo(() => letterText.slice(0, visibleChars), [visibleChars]);

	useEffect(() => {
		setVisibleChars(0);

		const intervalId = window.setInterval(() => {
			setVisibleChars((current) => {
				if (current >= letterText.length) {
					window.clearInterval(intervalId);
					return current;
				}

				return current + 2;
			});
		}, 35);

		return () => window.clearInterval(intervalId);
	}, []);

	return (
		<div className="relative min-h-screen overflow-hidden bg-surface px-4 py-8 md:px-8 md:py-12">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(252,180,180,0.35),_transparent_38%),linear-gradient(180deg,_rgba(247,243,237,0.9),_rgba(253,249,243,1))]" />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,_rgba(134,79,80,0.14),_transparent)]" />
			<div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center gap-8">
				<div className="flex items-center justify-between gap-4">
					<motion.a
						href="#/"
						whileHover={{ x: -4 }}
						className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
					>
						<ArrowLeft className="h-4 w-4" />
						Volver
					</motion.a>
					<p className="text-right text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
						Para el amor de mi vida
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
							Una carta para ti
						</span>
						<h1 className="font-serif text-4xl leading-tight text-on-surface md:text-6xl">
							Lo que siempre quise decirte
						</h1>
						<p className="mx-auto max-w-2xl text-sm leading-relaxed text-on-surface-variant md:text-base">
							Cada palabra aparece poco a poco, como un recuerdo que encuentra por fin su lugar.
						</p>
					</div>

					<div className="mx-auto max-w-3xl rounded-[1.75rem] border border-primary/10 bg-white/55 px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-sm md:px-8 md:py-10">
						<p className="font-serif text-lg leading-[2] whitespace-pre-wrap text-on-surface md:text-[1.35rem] md:leading-[2.1]">
							{displayedText}
							{visibleChars < letterText.length ? (
								<span className="type-caret" aria-hidden="true" />
							) : null}
						</p>
					</div>

					<div className="mt-10 flex justify-center">
						<motion.a
							href="#/"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
							className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-surface px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(134,79,80,0.08)]"
						>
							<Heart className="h-4 w-4 fill-primary" />
							Volver al inicio
						</motion.a>
					</div>
				</motion.section>
			</div>
		</div>
	);
};

export default function App() {
	const [route, setRoute] = useState<"home" | "letter">(getCurrentRoute);

	useEffect(() => {
		const handleHashChange = () => setRoute(getCurrentRoute());

		handleHashChange();
		window.addEventListener("hashchange", handleHashChange);

		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	return (
		<div className="min-h-screen">
			{route === "letter" ? (
				<LetterPage />
			) : (
				<main>
					<Hero />
					<StoryQuote />
					<Gallery />
					<Closing />
				</main>
			)}
		</div>
	);
}
