export default function VolumeSlider({name, gain, update}) {
    return (
        <label className="slider">
            <input
                type="range"
                className="level"
                min="0"
                max="1"
                step="0.05"
                value={gain}
                onChange={(e) => update(name, { gain: parseFloat(e.target.value) })}
            />
        </label>
    )
}