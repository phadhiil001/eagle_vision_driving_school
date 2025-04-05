"use client";

import React, { useState } from "react";
import styles from "../styles/FaqSection.module.scss";
import { ChevronDown } from "lucide-react";

const faqs = [
	{
		question: "How much does a lesson cost?",
		answer:
			"Each lesson is $55/hour. There's also a $110 package that includes a 1-hour practice session and the use of our car for your road test.",
	},
	{
		question: "Can I use your car for my road test?",
		answer:
			"Yes! The road test package includes a 1-hour lesson before the test and access to our vehicle for the exam.",
	},
	{
		question: "Are you available on evenings or weekends?",
		answer:
			"Absolutely. We offer flexible scheduling including evenings and weekends, across Winnipeg.",
	},
	{
		question: "Do I need any experience to book a lesson?",
		answer:
			"Not at all. We welcome beginners, newcomers, and nervous drivers. You're in patient and supportive hands.",
	},
];

export default function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			id='faq'
			className={styles.section}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h2>Frequently Asked Questions</h2>
					<p>Everything you need to know before booking your first lesson.</p>
				</div>

				<div className={styles.faqList}>
					{faqs.map((faq, index) => (
						<div
							className={styles.card}
							key={index}>
							<button
								onClick={() => toggle(index)}
								className={styles.question}>
								<span>{faq.question}</span>
								<ChevronDown
									className={`${styles.icon} ${
										openIndex === index ? styles.rotate : ""
									}`}
									size={20}
								/>
							</button>
							{openIndex === index && (
								<div className={styles.answer}>{faq.answer}</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
