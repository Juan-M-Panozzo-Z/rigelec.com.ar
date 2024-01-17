export default function PortalSection({ title, children, className }) {
    return (
        <div>
            <h3 className="uppercase tracking-tight text-neutral-700">{title}</h3>
            <div className="divider w-10"></div>
            <div className={`border p-4 rounded-box shadow ${className}`}>
                {children}
            </div>
        </div>
    )
}