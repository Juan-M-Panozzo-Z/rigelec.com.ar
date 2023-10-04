import "../styles/globals.css";
import { NextAuthProvider } from "@/components/Provider";
import Footer from "@/pages/components/Footer";
import Navbar from "@/pages/components/Navbar";

export const metadata = {
    title: "Rigelec profile",
    description: "Rigelec S.R.L.",
};

const RootLayout = async ({ children }) => {
    return (
        <html lang="en">
            <NextAuthProvider>
                <body className="bg-gradient-to-br from-primary/40 from-10% via-secondary/20 to-primary/40 to-90%">
                    <Navbar />
                    <section className="pt-24 p-4 min-h-screen">
                        {children}
                    </section>
                    <Footer />
                </body>
            </NextAuthProvider>
        </html>
    );
};

export default RootLayout;
