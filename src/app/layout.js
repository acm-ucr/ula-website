/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Lexend } from "next/font/google";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "UCR ULA",
  description:
    "Undergraduate Learning Assistants: Succeed in your lower-division CS classes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} pt-9 min-h-screen flex flex-col justify-between`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
