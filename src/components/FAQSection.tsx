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
		question: "What payment methods do you accept?",
		answer: "We accept cash, e-transfer payments for your convenience.",
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
	{
		question: "How do I book a lesson?",
		answer:
			"You can book a lesson directly through WhatsApp or pick a time using our online booking link. We'll confirm your lesson and send you all the details.",
	},
	{
		question: "Where are the lessons held?",
		answer:
			"Lessons are offered across Winnipeg. We'll discuss the best meeting point when you book.",
	},
	{
		question: "What if I need to cancel or reschedule?",
		answer:
			"Life happens — just give us at least 24 hours notice to reschedule your lesson without a fee.",
	},
	{
		question: "Do you provide lessons for newcomers to Canada?",
		answer:
			"Yes! We specialize in helping newcomers adjust to Winnipeg's driving rules and prepare for their road test.",
	},
	{
		question: "What type of car will I learn in?",
		answer:
			"You'll learn in a safe, easy-to-drive car equipped with dual controls for your safety and comfort.",
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
