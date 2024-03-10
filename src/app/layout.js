/* eslint-disable new-cap */
import "./globals.css";
import { Lexend } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`min-h-screen flex flex-col justify-between ${lexend.className}`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
