import addGuitarBar from "../../utils/bar-handler/add-guitar-bar";
import deleteBar from "../../utils/bar-handler/delete-bar";

export default function GuitarBarButtons({instrument, update}) {
    return (
        <div className="bar-buttons">
            <div className="button" onClick={() => addGuitarBar({instrument, update})}>
                Add Bar
            </div>
            <div className="button" onClick={() => deleteBar({instrument, update})}>
                Delete Bar
            </div>
        </div>
    )
}