// app/components/HeroSection.tsx
import styles from "../styles/HeroSection.module.scss";
import React from "react";

export default function HeroSection() {
	return (
		<section
			id='hero'
			className={styles.hero}>
			<div className={styles.overlay}></div>
			<div className={styles.content}>
				<h1>
					Affordable, Friendly Driving Lessons for Newcomers and Nervous Drivers
				</h1>
				<p>
					Flexible, friendly, and affordable — whether you&apos;re just starting
					or preparing for your road test, we&apos;ve got you.
				</p>
				<div className={styles.buttons}>
					<a
						href='#booking'
						className={`${styles.primary}`}>
						Book Your Lesson
					</a>
					<a
						href='https://wa.me/12045551234'
						target='_blank'
						rel='noopener noreferrer'
						className={`${styles.outline}`}>
						Message on WhatsApp
					</a>
				</div>
			</div>
		</section>
	);
}
