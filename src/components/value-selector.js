export default function ValueSelector({
    name,
    value,
    setValue,
}) {
    return (
        <div className="value-selector">
            <i
                className="value-button fa-solid fa-minus"
                onClick={() => setValue(value - 1)}
            />
            <input
                className="value-input"
                type="text"
                name={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <i
                className="value-button fa-solid fa-plus"
                onClick={() => setValue(value + 1)}
            />
        </div>
    )
}