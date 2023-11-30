export default function Section({ title, action, children }) {
    return (
        <div className="container p-4 mx-auto border rounded-box shadow min-h-[400px]">
            <div className="flex items-center justify-between">
                <h3 className="text-lg uppercase tracking-tight text-secondary">{title}</h3>
                {action}
            </div>
            {children}
        </div>
    )
}