import { Analytics } from '@vercel/analytics/react';
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsappButton from "@/components/WhatsappButton";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
        <body>
          <Navbar />
          <section className="min-h-screen">{children}</section>
          <WhatsappButton />
          <Footer />
          <Analytics />
        </body>
    </html>
  );
};

export default RootLayout;
