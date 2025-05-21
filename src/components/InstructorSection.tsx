import Image from "next/image";
import styles from "../styles/InstructorSection.module.scss";

export default function InstructorSection() {
	return (
		<section
			className={styles.section}
			id='instructor'>
			<div className={styles.container}>
				<div className={styles.imageWrapper}>
					<Image
						src='/leonard.png'
						alt='Leonard Ntumba, MPI Certified Driving Instructor'
						width={200}
						height={200}
					/>
				</div>
				<div className={styles.content}>
					<h2>Meet Your Instructor</h2>
					<p>
						Hi, I&apos;m Leonard Ntumba, a certified driving instructor based in
						Winnipeg. I specialize in helping newcomers, nervous drivers, and
						first-timers feel confident behind the wheel. With a calm and
						patient approach, my goal is to make sure you not only pass your
						test — but also feel confident every time you drive.
					</p>
				</div>
			</div>
		</section>
	);
}
