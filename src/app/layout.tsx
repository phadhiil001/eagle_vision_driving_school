import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "100",
});
export const metadata: Metadata = {
	title: "DriveConfident | Winnipeg Driving School",
	description:
		"Affordable driving lessons for newcomers and nervous drivers in Winnipeg.",
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
