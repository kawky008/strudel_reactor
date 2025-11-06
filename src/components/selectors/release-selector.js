export default function ReleaseSelector({selectedNote, release, updateNote}) {

    const step = 0.25;
    const min = 0.25;
    const max = 4;

    const handleChange = (value) => {
        let num = parseFloat(value);
        if (isNaN(num)) return;
        num = Math.max(min, Math.min(max, num));
        updateNote(selectedNote.note, selectedNote.index, { release: num });
    };

    return (
        <div className="value-selector">
            <i
                className="value-button fa-solid fa-minus"
                onClick={() => handleChange(release - step)}
            />
            <input
                className="value-input"
                type="number"
                step={step}
                min={min}
                max={max}
                value={release}
                onChange={(e) => handleChange(e.target.value)}
            />
            <i
                className="value-button fa-solid fa-plus"
                onClick={() => handleChange(release + step)}
            />
        </div>
    )
}