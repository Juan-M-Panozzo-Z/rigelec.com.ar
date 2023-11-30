export default function PortalSection({ title, children }) {
    return (
        <div>
            <h3 className="text-xl uppercase tracking-tight">{title}</h3>
            <div className="divider w-10"></div>
            <div className="border p-4 rounded-box shadow">
                {children}
            </div>
        </div>
    )
}