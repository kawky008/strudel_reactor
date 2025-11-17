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
                <div className="option" onClick={() => resetAllStore()}>New</div>
                <label  className="option">
                    Open JSON
                    <input type="file" accept="application/json" onChange={open} style={{ display: "none" }} />
                </label >
                <div className="option" onClick={() => save()}>Save As JSON</div>
            </div>
        </div>
    )
}