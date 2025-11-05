import { useState } from "react";
import { useStrudelStore } from "../stores/use-strudel-store";
import { useGlobalStore } from "../stores/use-global-store";
import { useDrumStore } from "../stores/use-drum-store";
import { usePianoStore } from "../stores/use-piano-store";
import ValueSelector from "./value-selector";

export default function GlobalSettings() {
    const { play, stop, proc } = useStrudelStore();

    const BPM = useGlobalStore((state) => state.BPM);
    const setBPM = useGlobalStore((state) => state.setBPM);

    const updateDrum = useDrumStore((state) => state.updateDrum)
    const updatePiano = usePianoStore((state) => state.updatePiano)

    const [isPlaying, setIsPlaying] = useState(false);

    function playAll() {
        updateDrum("settings", {play: true});
        updatePiano("settings", {play: true});
        // add piano, guitar, synths update here
        proc?.();
        setIsPlaying(true);
        play?.();
    }

    function stopAll() {
        updateDrum("settings", {play: false});
        updatePiano("settings", {play: false});

        setIsPlaying(false);
        stop?.();
    }

    return (
        <div className="global-settings">
            {/* BPM */}
            <ValueSelector name="BPM" value={BPM} setValue={setBPM} />

            {/* play & stop */}
            <div style={{width: "2rem"}}>
                {!isPlaying ? 
                    <i
                        className="fa-solid fa-play"
                        onClick={() => {playAll()}}
                    />
                    :
                    <i
                        className="fa-solid fa-pause"
                        onClick={() => {stopAll()}}
                    />
                }
            </div>

        </div>
    )
}