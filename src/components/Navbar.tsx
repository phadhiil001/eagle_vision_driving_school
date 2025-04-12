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

	// Handle Scroll - Update Active Section
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 3;

			const offsets = navLinks.map((link) => {
				const el = document.querySelector(link.href) as HTMLElement;
				return {
					id: link.href.slice(1),
					offsetTop: el?.offsetTop || 0,
				};
			});

			for (let i = offsets.length - 1; i >= 0; i--) {
				if (scrollPosition >= offsets[i].offsetTop) {
					setActiveSection(offsets[i].id);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Run on mount

		return () => window.removeEventListener("scroll", handleScroll);
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
							onClick={() => setActiveSection(link.href.slice(1))}
							className={`${styles.link} ${
								activeSection === link.href.slice(1) ? styles.active : ""
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

			{/* Mobile Nav */}
			{open && (
				<div className='md:hidden'>
					<div className={styles.mobileMenu}>
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={() => {
									setOpen(false);
									setActiveSection(link.href.slice(1));
								}}
								className={`${styles.link} ${
									activeSection === link.href.slice(1) ? styles.active : ""
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
