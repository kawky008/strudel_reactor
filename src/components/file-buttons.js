import { useState } from "react"
import save from "../utils/file-handler/save";
import open from "../utils/file-handler/open";
import resetAllStore from "../utils/file-handler/reset-all-store";

export default function FileHandler() {
    const [clicked, setClicked] = useState(false);
    return (
        <div className="file-dropdown">

            <i className="fa-solid fa-bars fa-2x" onClick={() => setClicked(!clicked)}/>

            <div className="content" style={{display: clicked ? "block" : "none"}}>
                {/* create new */}
                <div
                    className="option"
                    onClick={() => {
                        if ( window.confirm("Do you want to save the current file?") ) {
                            save();
                        }
                        resetAllStore()
                    }}
                >
                    Create New
                </div>

                {/* open json */}
                <label  className="option">
                    Open JSON
                    <input type="file" accept="application/json" onChange={open} style={{ display: "none" }} />
                </label >

                {/* save as json */}
                <div className="option" onClick={() => save()}>Save As JSON</div>
            </div>
        </div>
    )
}