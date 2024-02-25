import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="pt-9 min-h-screen flex flex-col justify-between">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
