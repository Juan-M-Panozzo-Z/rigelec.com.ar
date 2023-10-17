export default function SectionTitle({ ...props }) {
    return (
        <div className="flex justify-center">
            <h2 className="text-2xl md:text-4xl text-center text-gray-700 hover:text-primary transition-color duration-200 mb-8">
                {props.title}
            </h2>
        </div>
    );
}
