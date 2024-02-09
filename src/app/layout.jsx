import { Analytics } from '@vercel/analytics/react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsappButton from "../components/WhatsappButton";

import { Lato } from "next/font/google";
import '@radix-ui/themes/styles.css';
import "../styles/globals.css";
import { Theme } from '@radix-ui/themes';

export const metadata = {
  title: "Rigelec | Energia En Donde Estés",
  authors: [{
    name: "Juan Manuel Panozzo Zénere",
    url: "https://www.linkedin.com/in/juan-manuel-panozzo-zenere/"
  }],
  description: "Aqui podrás encontrar todo lo que necesites en iluminación para hogar y obra"
};

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="rigelec" suppressHydrationWarning>
      <Theme className={`${lato.className}`}>
        <body>
          <Navbar />
          <section className="min-h-screen">{children}</section>
          <WhatsappButton />
          <Footer />
          <Analytics />
        </body>
      </Theme>
    </html >
  );
};

export default RootLayout;
