"use client";
import styles from "../styles/HeroSection.module.scss";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
	const slides = [
		"/images/slide1.jpg",
		"/images/slide2.jpg",
		"/images/slide3.jpg",
		"/images/slide4.jpg",
		"/images/slide5.jpg",
		"/images/slide6.jpg",
		"/images/slide7.jpg",
	];

	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setCurrent((i) => (i + 1) % slides.length);
		}, 3000);
		return () => clearInterval(id);
	}, [slides.length]);

	return (
		<>
			<div className={styles.availability}>
				<span>📅 Available:</span>
				<span>Weekdays, Evenings & Weekends</span>
			</div>
			<section
				id='hero'
				className={styles.hero}>
				<div className={styles.slides}>
					{slides.map((src, i) => (
						<div
							key={i}
							className={`${styles.slide} ${
								i === current ? styles.active : ""
							}`}
							style={{ backgroundImage: `url(${src})` }}
						/>
					))}
				</div>
				<div className={styles.overlay}></div>
				<div className={styles.content}>
					<h1>
						Affordable Driving Lessons in Winnipeg for Newcomers, Nervous
						Drivers & All Ages
					</h1>
					<p>
						Flexible, friendly, and affordable — whether you&apos;re just
						starting or preparing for your road test, we&apos;ve got you.
					</p>
					<div className={styles.buttons}>
						<a
							href='#booking'
							className={`${styles.primary}`}>
							Book Your Lesson
						</a>
						<a
							href='https://wa.me/12043990226'
							target='_blank'
							rel='noopener noreferrer'
							className={`${styles.outline}`}>
							Message on WhatsApp
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
