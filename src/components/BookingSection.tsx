import styles from "../styles/BookingSection.module.scss";

export default function BookingSection() {
	return (
		<section
			className={styles.section}
			id='booking'>
			<div className={styles.container}>
				<h2>Ready to Hit the Road?</h2>
				<p>
					Choose your booking style — message directly or pick a time that works
					for you.
				</p>

				<div className={styles.buttonGroup}>
					<a
						href='https://wa.me/12043990226'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.primaryButton}>
						Book via WhatsApp
					</a>
					<a
						href='https://calendly.com/jamiuimamfadlullah/30min'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.outlineButton}>
						Book with Calendly
					</a>
				</div>

				{/* Optional embedded version below */}
				{/* <div className={styles.embedContainer}>
					<iframe
						src='https://calendly.com/jamiuimamfadlullah/30min'
						width='80%'
						height='300'
						scrolling='no'
						style={{ borderRadius: "12px" }}></iframe>
				</div> */}
			</div>
		</section>
	);
}
