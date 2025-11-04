import VolumeSlider from "./volume-slider.js";

export default function Track({
    displayName, name, symbol, struct, play, gain, update
}) {
    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === symbol ? "~" : symbol;
        update(name, { struct: newStruct });
    };

    const reset = () => {
        update(name, { struct: Array(struct.length).fill("~") });
        update(name, { play: true });
        update(name, { gain: 1 });
    }

    return (
        <div style={{ display: "flex", gap: "1rem"}}>
            <div className="drum-settings">
                <div className="name">{displayName}</div>

                {/* mute button */}
                <div
                    className="mute-button"
                    onClick={() => update(name, { play: !play })}
                >
                    {play ? <i className="fa-solid fa-volume-high" /> : <i className="fa-solid fa-volume-xmark" /> }
                </div>

                {/* volume slider */}
                <VolumeSlider name={name} gain={gain} update={update} />

                {/* reset button */}
                <i
                    className="fa-solid fa-rotate-left ms-2"
                    onClick={() => {
                        if (window.confirm("Do you want to reset this track settings? This action cannot be undone."))
                        {
                            reset();
                        }}}
                />
                
            </div>
            <div className="drum-bars">
                {struct.map((note, i) => (
                <div
                    key={i}
                    onClick={() => toggleNote(i)}
                    className="drum-bar"
                    style={{
                        backgroundColor: note === symbol ? "white" : "#171717",
                        transition: "background-color 0.10s",
                        marginRight: ((i + 1) % 16 === 0) ? "1.5rem" : "0",
                        flexShrink: 0
                    }}
                />
                ))}
            </div>
        </div>
    );
    }
