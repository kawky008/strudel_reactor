import addBassBar from "../../utils/add-bass-bar";
import deleteBar from "../../utils/delete-bar";

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