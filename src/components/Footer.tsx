import styles from "../styles/Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.branding}>
					Eagle&apos;s Vision Driving School
				</div>

				<div className={styles.contact}>
					Winnipeg, MB
					<br />
					📞 (204) 555-1234
					<br />
					✉️ info@eaglesvision.ca
				</div>

				<div className={styles.nav}>
					<a href='#hero'>Home</a>
					<a href='#pricing'>Pricing</a>
					<a href='#testimonials'>Reviews</a>
					<a href='#booking'>Book Now</a>
				</div>
			</div>

			<div className={styles.copyright}>
				&copy; {new Date().getFullYear()} Eagle&apos;s Vision Driving school.
				All rights reserved.
			</div>
		</footer>
	);
}
