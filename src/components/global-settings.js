import { useState } from "react";
import { useStrudelStore } from "../stores/use-strudel-store";
import { useGlobalStore } from "../stores/use-global-store";
import { useDrumStore } from "../stores/use-drum-store";

export default function GlobalSettings() {
    const { play, stop, proc } = useStrudelStore();

    const BPM = useGlobalStore((state) => state.BPM);
    const setBPM = useGlobalStore((state) => state.setBPM);

    const updateDrum = useDrumStore((state) => state.updateDrum)

    const [isProced, setIsProced] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);

    function procAll() {
        updateDrum("settings", {play: true});
        proc?.();
        setIsProced(true);
    }

    function playAll() {
        if (!isProced) {
            alert("Error: Code has not been preprocessed.");
            return;
        }
        setIsPlaying(true);
        play?.();
    }

    function stopAll() {
        setIsPlaying(false);
        stop?.();
    }

    return (
        <div className="global-settings">
            {/* BPM */}
            <div className="bpm-selector">
                <i
                    className="bpm-button fa-solid fa-minus"
                    onClick={() => setBPM(BPM - 1)}
                />
                <input
                    className="bpm-input"
                    type="text"
                    name="BPM"
                    value={BPM}
                    onChange={(e) => setBPM(e.target.value)}
                />
                <i
                    className="bpm-button fa-solid fa-plus"
                    onClick={() => setBPM(BPM + 1)}
                />
            </div>

            {/* preprocess */}
            <i
                className="fa-solid fa-rotate-right"
                onClick={(() => {procAll()})}
            />

            {/* play & stop */}
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
    )
}