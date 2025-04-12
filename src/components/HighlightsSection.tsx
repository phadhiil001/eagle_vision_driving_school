import styles from "../styles/HighlightsSection.module.scss";
import React from "react";

const highlights = [
	{
		icon: "🗣️",
		title: "English & French Lessons",
		desc: "Learn comfortably in your preferred language.",
	},
	{
		icon: "👨‍👩‍👧‍👦",
		title: "All Age Ranges Welcome",
		desc: "Driving lessons for teens, adults & seniors.",
	},
	{
		icon: "💰",
		title: "Affordable Pricing",
		desc: "Lessons start at just $55 per hour via interac e-transfer.",
	},
	{
		icon: "😊",
		title: "Super Patient Instructor",
		desc: "Ideal for nervous and first-time drivers.",
	},
	{
		icon: "🚗",
		title: "Road Test Package",
		desc: "Includes 1-hour prep + use of our car for test.",
	},
	{
		icon: "🕒",
		title: "Flexible Scheduling",
		desc: "Weekdays, Evenings & Weekends across Winnipeg.",
	},
];

export default function HighlightsSection() {
	return (
		<section
			className={styles.section}
			id='highlights'>
			<div className={styles.container}>
				<h2>Why Choose Us</h2>
				<div className={styles.grid}>
					{highlights.map((item, index) => (
						<div
							className={styles.card}
							key={index}>
							<div className={styles.icon}>{item.icon}</div>
							<h3>{item.title}</h3>
							<p>{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
