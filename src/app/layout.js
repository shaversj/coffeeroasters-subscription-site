import { Fraunces, Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import NavModal from "@/app/components/NavModal";

const fraunces = Fraunces({ weight: "variable", subsets: ["latin"], display: "swap", variable: "--font-fraunces" });

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata = {
  title: "Frontend Mentor | Coffeeroasters subscription site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${barlow.variable} grid place-items-center bg-light-cream px-6 md:px-[40px] lg:px-[80px]`}>
        <div className={"container md:w-[689px] lg:w-[1280px]"}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
