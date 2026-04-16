/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, Quote, ChevronDown } from "lucide-react";

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
		</motion.div>
	</section>
);

export default function App() {
	return (
		<div className="min-h-screen">
			<main>
				<Hero />
				<StoryQuote />
				<Gallery />
				<Closing />
			</main>
		</div>
	);
}
