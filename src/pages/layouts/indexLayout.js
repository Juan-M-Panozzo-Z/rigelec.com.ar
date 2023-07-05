import Head from "next/head"
import Header from "../components/Header"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"

export default function IndexLayout({ children, ...props }) {
    return (
        <>
              <Head>
                <title>{`${props.title} | Rigelec`}</title>
                <meta name="description" content={props.description} />
                </Head>
            <Header />
           <main>{children}</main>
           <Carousel />
            <Footer />
        </>
    )
}