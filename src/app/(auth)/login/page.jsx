import LoginForm from "./components/form";

export default function LoginPage() {

    return (
        <main className="pt-24">
            <section className="container mx-auto px-6">
                <div className="flex justify-center items-center h-[400px]">
                    <LoginForm />
                </div>
            </section>
        </main>
    )
}