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
           <main>
           {children}
           </main>
           <Carousel />
            <Footer />
            {/* FloatComponents */}
            {/* <div className="fixed bottom-4 right-4 z-20 "> */}
            {/* <GrowattData /> */}
            {/* </div> */}
        </>
    )
}