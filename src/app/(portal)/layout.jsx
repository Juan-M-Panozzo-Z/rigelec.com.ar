import Navigation from "./components/PortalNavigation";

export default function PortalLayout({ children }) {
    return (

        <main className="pt-28">
            <section className="container mx-auto px-4">
            <Navigation />
                {children}
            </section>
        </main>

    );
}