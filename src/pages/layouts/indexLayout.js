
import Header from "../components/Header"

export default function IndexLayout({ children }) {
    return (
        <>
            <Header />
           <main>{children}</main>
        </>
    )
}