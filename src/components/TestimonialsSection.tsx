"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import styles from "../styles/TestimonialsSection.module.scss";
import reviews from "../app/data/reviews.json";

export default function TestimonialsSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		slides: {
			perView: 1,
			spacing: 20,
		},
	});

	return (
		<section
			className={styles.section}
			id='testimonials'>
			<div className={styles.container}>
				<h2>What Students Are Saying</h2>

				<div className={styles.sliderWrapper}>
					<button
						className={styles.arrowLeft}
						onClick={() => slider.current?.prev()}>
						←
					</button>

					<div
						ref={sliderRef}
						className='keen-slider'>
						{reviews.map((r, index) => (
							<div
								className='keen-slider__slide'
								key={index}>
								<p>"{r.quote}"</p>
								<div className={styles.name}>– {r.name}</div>
							</div>
						))}
					</div>

					<button
						className={styles.arrowRight}
						onClick={() => slider.current?.next()}>
						→
					</button>
				</div>

				{/* Slider Dots */}
				<div className={styles.dots}>
					{reviews.map((_, idx) => (
						<button
							key={idx}
							onClick={() => slider.current?.moveToIdx(idx)}
							className={currentSlide === idx ? styles.activeDot : ""}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
