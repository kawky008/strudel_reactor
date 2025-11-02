import addDrumBar from "../../utils/add-drum-bar";
import deleteDrumBar from "../../utils/delete-drum-bar";

export default function DrumBarButtons() {
    return (
        <div className="bar-buttons">
            <div onClick={addDrumBar}>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div onClick={deleteDrumBar}>
                <i class="fa-solid fa-minus"></i>
            </div>
        </div>
    )
}