import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import { Lexend } from "next/font/google";

// eslint-disable-next-line new-cap
const lexend = Lexend({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={lexend.className}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </main>
  );
}
