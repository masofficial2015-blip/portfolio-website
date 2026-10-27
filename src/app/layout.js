import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Mesud Ahmed — Software Engineer",
  description:
    "Software Engineering portfolio of Mesud Ahmed — building practical, modern solutions to real-world problems. Specializing in full-stack web development, Telegram bots, and healthcare tech.",
  keywords: [
    "Mesud Ahmed",
    "Software Engineer",
    "Full Stack Developer",
    "Ethiopia",
    "AASTU",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Mesud Ahmed" }],
  creator: "Mesud Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mesud Ahmed — Software Engineer",
    description:
      "Software Engineering portfolio of Mesud Ahmed — full-stack developer building practical solutions.",
    siteName: "Mesud Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesud Ahmed — Software Engineer",
    description: "Full-stack developer building practical, modern solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
