import addSynthBar from "../../utils/bar-handler/add-synth-bar";
import deleteBar from "../../utils/bar-handler/delete-bar";

export default function SynthBarButtons({instrument, update}) {
    return (
        <div className="bar-buttons">
            <div className="button" onClick={() => addSynthBar({instrument, update})}>
                Add Bar
            </div>
            <div className="button" onClick={() => deleteBar({instrument, update})}>
                Delete Bar
            </div>
        </div>
    )
}