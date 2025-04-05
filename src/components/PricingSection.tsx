import styles from "../styles/PricingSection.module.scss";

export default function PricingSection() {
	return (
		<section
			className={styles.section}
			id='pricing'>
			<div className={styles.container}>
				<h2>Transparent Pricing</h2>
				<div className={styles.grid}>
					<div className={styles.card}>
						<h3>Standard Lesson</h3>
						<div className={styles.price}>$55/hr</div>
						<p>Perfect for new drivers or brushing up before the road test.</p>
					</div>
					<div className={styles.card}>
						<h3>Road Test Package</h3>
						<div className={styles.price}>$110</div>
						<p>
							Includes 1-hour practice and use of vehicle for your road test.
						</p>
					</div>
				</div>
				<div className={styles.cta}>
					<a href='#booking'>Book Your Lesson</a>
				</div>
			</div>
		</section>
	);
}
