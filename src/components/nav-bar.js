import GlobalSettings from "./global-settings";

export default function NavBar({ instrument, setInstrument }) {
    return (
        <div className="nav-bar">
            <div className="">
                
            </div>
            <div style={{marginLeft: "50rem"}}>
                <GlobalSettings />
            </div>
            <div className="radio-inputs">
                <label className="radio">
                    <input
                        type="radio"
                        name="radio"
                        value="drums"
                        checked={instrument === "drums"}
                        onChange={() => setInstrument("drums")}
                    />
                    <span className="name">Drums</span>
                </label>

                <label className="radio">
                    <input
                        type="radio"
                        name="radio"
                        value="piano"
                        checked={instrument === "piano"}
                        onChange={() => setInstrument("piano")}
                    />
                    <span className="name">Piano</span>
                </label>
                    
                <label className="radio">
                    <input
                        type="radio"
                        name="radio"
                        value="guitar"
                        checked={instrument === "guitar"}
                        onChange={() => setInstrument("guitar")}
                    />
                    <span className="name">Guitar</span>
                </label>

                <label className="radio">
                    <input
                        type="radio"
                        name="radio"
                        value="synths"
                        checked={instrument === "synths"}
                        onChange={() => setInstrument("synths")}
                    />
                    <span className="name">Synths</span>
                </label>
            </div>
        </div>
    )
}