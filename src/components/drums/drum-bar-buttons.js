import addDrumBar from "../../utils/add-drum-bar";
import deleteDrumBar from "../../utils/delete-drum-bar";

export default function DrumBarButtons() {
    return (
        <div className="bar-buttons">
            <div className="button" onClick={addDrumBar}>
                Add Bar
            </div>
            <div className="button" onClick={deleteDrumBar}>
                Delete Bar
            </div>
        </div>
    )
}