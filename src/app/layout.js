import { Fraunces, Barlow } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ weight: "variable", subsets: ["latin"], display: "swap", variable: "--font-fraunces" });

const barlow = Barlow({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"], display: "swap", variable: "--font-barlow" });

export const metadata = {
  title: "Frontend Mentor | Coffeeroasters subscription site",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${barlow.variable}`}>{children}</body>
    </html>
  );
}
