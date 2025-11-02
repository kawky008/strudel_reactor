import { useDrumStore } from "../../../stores/use-drum-store.js";
import VolumeSlider from "../../volume-slider.js";

export default function RimShot() {
    // get drum settings
    const { struct, play, gain } = useDrumStore((state) => state.drums.rim_shot);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === "rim" ? "~" : "rim";
        updateDrum("rim_shot", { struct: newStruct });
    };

    const reset = () => {
        updateDrum("rim_shot", { struct: Array(struct.length).fill("~") });
        updateDrum("rim_shot", { play: true });
        updateDrum("rim_shot", { gain: 1 });
    }

    return (
        <div style={{ display: "flex", gap: "1rem"}}>
            <div className="drum-settings">
                <div className="name">Rim Shot</div>

                {/* mute button */}
                <div
                    className="mute-button"
                    onClick={() => updateDrum("rim_shot", { play: !play })}
                >
                    {play ? <i className="fa-solid fa-volume-high" /> : <i className="fa-solid fa-volume-xmark" /> }
                </div>

                {/* volume slider */}
                <VolumeSlider name={"rim_shot"} gain={gain} update={updateDrum} />

                {/* reset button */}
                <i className="fa-solid fa-rotate-left ms-2" onClick={() => reset()} />
                
            </div>
            <div className="drum-bars">
                {struct.map((note, i) => (
                <div
                    key={i}
                    onClick={() => toggleNote(i)}
                    className="drum-bar"
                    style={{
                    backgroundColor: note === "rim" ? "white" : "#171717",
                    transition: "background-color 0.10s",
                    marginRight: (i + 1) % 16 === 0 && "0.75rem",
                    flexShrink: 0
                    }}
                />
                ))}
            </div>
        </div>
    );
    }
