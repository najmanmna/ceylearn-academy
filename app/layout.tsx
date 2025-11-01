import type { Metadata } from "next";
// 1. Import all your fonts
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

// 2. Set up the font variables
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS Variable name
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights you need
  variable: "--font-montserrat", // CSS Variable name
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights you need
  variable: "--font-poppins", // CSS Variable name
});

export const metadata: Metadata = {
  title: "Ceylearn Academy",
  description: "Welcome to Ceylearn Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply all font variables to the body */}
      <body
        className={`${inter.variable} ${montserrat.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
