import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "300",
});

export const metadata: Metadata = {
	title: "Eagle's Vision Driving School | Affordable Driving Lessons Winnipeg",
	description:
		"Learn to drive confidently in Winnipeg with Eagle's Vision Driving School. Affordable lessons for newcomers, nervous drivers, and all age ranges. Road test preparation and flexible scheduling in English and French.",
	keywords:
		"Driving School Winnipeg, Driving Lessons Winnipeg, Affordable Driving Instructor, Learn to Drive Winnipeg, Road Test Preparation Winnipeg, Driving Classes Winnipeg, English French Driving Lessons",
	openGraph: {
		title:
			"Eagle's Vision Driving School | Affordable Driving Lessons Winnipeg",
		description:
			"Affordable and patient driving lessons in Winnipeg. Road test preparation, flexible scheduling, English & French lessons for all ages.",

		url: "https://eaglevisiondrivingschool.com/",

		siteName: "Eagle's Vision Driving School",
		images: [
			{
				url: "/public/leonard.png", // You can create a clean OG image for sharing
				width: 1200,
				height: 630,
				alt: "Driving Lessons Winnipeg - Eagle's Vision Driving School",
			},
		],
		locale: "en_CA",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
