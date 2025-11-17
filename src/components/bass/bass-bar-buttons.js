import addBassBar from "../../utils/bar-handler/add-bass-bar";
import deleteBar from "../../utils/bar-handler/delete-bar";

export default function BassBarButtons({instrument, update}) {
    return (
        <div className="bar-buttons">
            <div className="button" onClick={() => addBassBar({instrument, update})}>
                Add Bar
            </div>
            <div className="button" onClick={() => deleteBar({instrument, update})}>
                Delete Bar
            </div>
        </div>
    )
}