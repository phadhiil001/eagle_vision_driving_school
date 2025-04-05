"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<string>("hero");

	const navLinks = [
		{ name: "Home", href: "#hero" },
		{ name: "Pricing", href: "#pricing" },
		{ name: "Reviews", href: "#testimonials" },
		{ name: "Book Now", href: "#booking" },
	];

	useEffect(() => {
		const sections = navLinks.map((link) => document.querySelector(link.href));

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute("id");
						if (id) setActiveSection(id);
					}
				});
			},
			{
				rootMargin: "-50% 0px -50% 0px", // triggers when section is centered
				threshold: 0.2,
			},
		);

		sections.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				if (section) observer.unobserve(section);
			});
		};
	}, []);

	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<Link
					href='/'
					className={styles.logo}>
					Eagle&apos;s Vision Driving School
				</Link>

				{/* Desktop Nav */}
				<div className={styles.desktopNav}>
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className={`${styles.link} ${
								activeSection === link.href.replace("#", "")
									? styles.active
									: ""
							}`}>
							{link.name}
						</a>
					))}
				</div>

				{/* Mobile Toggle */}
				<button
					className={styles.menuButton}
					onClick={() => setOpen(!open)}
					aria-label='Toggle menu'>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Dropdown */}
			{open && (
				<div className='md:hidden'>
					<div className={styles.mobileMenu}>
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={() => setOpen(false)}
								className={`${styles.link} ${
									activeSection === link.href.replace("#", "")
										? styles.active
										: ""
								}`}>
								{link.name}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
