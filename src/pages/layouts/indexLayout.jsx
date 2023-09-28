import Head from "next/head";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsappButton from "../components/WhatsappButton";

export default function IndexLayout({ children, ...props }) {
    return (
        <>
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
        </>
    );
}
