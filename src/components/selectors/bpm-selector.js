export default function BPMSelector({
    name,
    value,
    setValue,
}) {
    const min = 20;
    const max = 300;
    const step = 1;

    const handleChange = (val) => {
        let num = parseInt(val);
        if (isNaN(num)) return;
        num = Math.max(min, Math.min(max, num));
        setValue(num);
    };

    return (
        <div className="value-selector">
            <i
                className="value-button fa-solid fa-minus"
                onClick={() => handleChange(value - step)}
            />
            <input
                className="value-input"
                type="number"
                name={name}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
            <i
                className="value-button fa-solid fa-plus"
                onClick={() => handleChange(value + step)}
            />
        </div>
    )
}