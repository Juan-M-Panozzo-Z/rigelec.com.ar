export default function Section({className ,children}) {
    return (
        <section
        
        className={`container mx-auto ${className} px-12 mt-12 rounded-box space-y-6`}>
            {children}
        </section>
    )
}
