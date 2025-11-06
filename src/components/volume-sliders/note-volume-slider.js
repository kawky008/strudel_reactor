export default function NoteVolumeSlider({selectedNote, gain, updateNote}) {
    return (
        <label className="slider">
            <input
                type="range"
                className="level"
                min="0"
                max="2"
                step="0.05"
                value={gain}
                onChange={(e) => updateNote(selectedNote.note, selectedNote.index, {gain: e.target.value})}
            />

        </label>
    )
}