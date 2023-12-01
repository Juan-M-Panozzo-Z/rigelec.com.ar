export default function ItemDataForm({ label, children }) {
    return (
        <div className=" max-w-xl">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            {children}
        </div>
    )
}