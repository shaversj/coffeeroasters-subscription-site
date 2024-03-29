import { Fraunces, Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const fraunces = Fraunces({ weight: "variable", subsets: ["latin"], display: "swap", variable: "--font-fraunces" });

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata = {
  title: "Frontend Mentor | Coffeeroasters subscription site",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${barlow.variable} bg-light-cream px-6`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
