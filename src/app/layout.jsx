import "../styles/globals.css";
import { NextAuthProvider } from "@/components/Provider";
import { getServerSession } from "next-auth";
import NoSession from "@/components/NoSession";
import Footer from "@/pages/components/Footer";
import Navbar from "@/pages/components/Navbar";
import WhatsappButton from "@/pages/components/WhatsappButton";

export const metadata = {
    title: "Perfil | Rigelec",
    description: "Rigelec S.R.L.",
};

const RootLayout = async ({ children }) => {
    const session = await getServerSession();
    return (
        <html lang="en">
            <NextAuthProvider>
                <body className="bg-base-200">
                    <NoSession session={session}>
                        <Navbar />
                        <section className="min-h-screen">{children}</section>
                        <Footer />
                        <WhatsappButton />
                    </NoSession>
                </body>
            </NextAuthProvider>
        </html>
    );
};

export default RootLayout;
