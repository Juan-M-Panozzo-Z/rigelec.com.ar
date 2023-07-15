export default function SectionTitle({...props}) {
    return (
        <h2 className="text-2xl md:text-6xl text-center text-gray-700 hover:text-primary transition-color duration-200">{props.title}</h2>
    )
}