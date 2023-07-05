import Head from "next/head"
import Header from "../components/Header"

export default function IndexLayout({ children, ...props }) {
    return (
        <>
              <Head>
                <title>{`${props.title} | Rigelec`}</title>
                <meta name="description" content={props.description} />
                </Head>
            <Header />
           <main>{children}</main>
        </>
    )
}