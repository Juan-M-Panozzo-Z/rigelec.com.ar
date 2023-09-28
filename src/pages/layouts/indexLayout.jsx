import Head from "next/head";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsappButton from "../components/WhatsappButton";
import { SessionProvider } from "next-auth/react";

export default function IndexLayout({ children, ...props }) {
    return (
        <SessionProvider session={props.session}>
            <Head>
                <title>{`${props.title} | Rigelec`}</title>
                <meta name="description" content={props.description} />
            </Head>
            <Navbar />
            <main className={`min-h-screen ${props.className}`}>
                {children}
            </main>
            <Carousel />
            <Footer />
            <WhatsappButton />
        </SessionProvider>
    );
}
