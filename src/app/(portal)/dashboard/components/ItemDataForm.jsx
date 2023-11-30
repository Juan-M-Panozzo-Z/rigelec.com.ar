export default function ItemDataForm({ name, type, placeholder, required }) {
    return (
        <div className=" max-w-xl">
            <label className="label">
                <span className="label-text">{name}</span>
            </label>
            <input 
                className="input input-bordered w-full"
                type={type}
                placeholder={placeholder}
                required={required} />
        </div>
    )
}