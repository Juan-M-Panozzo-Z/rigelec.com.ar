export default function ItemUserData({ label, icon }) {
    return (
        <div className="flex items-center gap-2 text-neutral-700">
            {icon}
            <span>{label}</span>
        </div>
    )
}