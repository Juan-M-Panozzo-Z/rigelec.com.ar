import "@/styles/globals.css";
import { NextAuthProvider } from "@/components/Provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const RootLayout = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <NextAuthProvider>
                <body>
                    <Navbar />
                    <section className="min-h-screen">
                        {children}
                    </section>
                    <Footer />
                </body>
            </NextAuthProvider>
        </html>
    );
};

export default RootLayout;
