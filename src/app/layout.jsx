import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";
import { Lato } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsappButton from "../components/WhatsappButton";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.className}`}>
        <Navbar />
        <section className="min-h-screen">{children}</section>
        <WhatsappButton />
        <Footer />
        <Analytics />
      </body>
    </html >
  );
};

export default RootLayout;
