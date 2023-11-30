export default function Layout({ children }) {
    return (
        <main className="pt-24">
            <section className="container mx-auto px-6">{children}</section>
        </main>
    )
}