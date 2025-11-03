
import { useState } from "react";
import { useStrudelStore } from "../../stores/use-strudel-store";
import { useDrumStore } from "../../stores/use-drum-store";
import DrumBarButtons from "./drum-bar-buttons";
import BankSelector from "./bank-selector";
import Track from "../tracks";

export default function DrumSequencer() {
    const { play, stop, proc } = useStrudelStore();

    const playDrums = useDrumStore((state) => state.drums.settings.play)
    const updateDrum = useDrumStore((state) => state.updateDrum)

    // drum tracks
    const { struct: hhStruct, play: hhPlay, gain: hhGain } = useDrumStore((state) => state.drums.hihat);
    const { struct: ohStruct, play: ohPlay, gain: ohGain } = useDrumStore((state) => state.drums.open_hihat);
    const { struct: sdStruct, play: sdPlay, gain: sdGain } = useDrumStore((state) => state.drums.snare_drum);
    const { struct: rimStruct, play: rimPlay, gain: rimGain } = useDrumStore((state) => state.drums.rim_shot);
    const { struct: ltStruct, play: ltPlay, gain: ltGain } = useDrumStore((state) => state.drums.low_tom);
    const { struct: mtStruct, play: mtPlay, gain: mtGain } = useDrumStore((state) => state.drums.middle_tom);
    const { struct: htStruct, play: htPlay, gain: htGain } = useDrumStore((state) => state.drums.high_tom);
    const { struct: rdStruct, play: rdPlay, gain: rdGain } = useDrumStore((state) => state.drums.ride_cymbal);
    const { struct: crStruct, play: crPlay, gain: crGain } = useDrumStore((state) => state.drums.crash_cymbal);
    const { struct: bdStruct, play: bdPlay, gain: bdGain } = useDrumStore((state) => state.drums.bass_drum);

    const [isProced, setIsProced] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="">
            <div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-end"}}>
                <div className="instrument-settings">
                    <div className="name">Drums</div>
                    <div className="row" style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                        <div className="col">
                            <BankSelector />
                        </div>

                        {/* preprocess */}
                        <div className="col">
                            <i
                                className="fa-solid fa-rotate-right"
                                onClick={(() => {
                                    updateDrum("settings", {play: true});
                                    proc?.();
                                    setIsProced(true);
                                })}
                            />
                        </div>

                        {/* play & stop */}
                        <div className="col">
                            {!isPlaying ? 
                                <i
                                    className="fa-solid fa-play"
                                    onClick={() => {
                                        if (!isProced) {
                                            alert("Error: Code has not been preprocessed.");
                                            return;
                                        }
                                        setIsPlaying(true);
                                        play?.();
                                    }}
                                />
                                :
                                <i
                                    className="fa-solid fa-pause"
                                    onClick={() => {
                                        setIsPlaying(false);
                                        stop?.();
                                    }}
                                />
                            }
                        </div>

                        {/* mute & unmute */}
                        <div className="col">
                            {!playDrums ?
                                <i
                                    className="fa-solid fa-volume-xmark"
                                    onClick={(() => {
                                        updateDrum("settings", {play: true});
                                        proc?.();
                                    })}
                                />
                                :
                                <i
                                    className="fa-solid fa-volume-high"
                                    onClick={(() => {
                                        updateDrum("settings", {play: false});
                                        proc?.();
                                    })}
                                />
                            }
                            
                        </div>
                    </div>
                </div>

                <DrumBarButtons />
            </div>
            
            <div className="mt-4">
                <Track displayName="Hi-Hat" name="hihat" symbol="hh" struct={hhStruct} play={hhPlay} gain={hhGain} update={updateDrum} />
            </div>
            <div className="mt-4">
                <Track displayName="Open Hi-Hat" name="open_hihat" symbol="oh" struct={ohStruct} play={ohPlay} gain={ohGain} update={updateDrum} />
            </div>
            <div className="mt-4">
                <Track displayName="Snare Drum" name="snare_drum" symbol="sd" struct={sdStruct} play={sdPlay} gain={sdGain} update={updateDrum} />
            </div>
            <div className="mt-4">
                <Track displayName="Rim Shot" name="rim_shot" symbol="rim" struct={rimStruct} play={rimPlay} gain={rimGain} update={updateDrum} />
            </div>
            <div className="mt-4">
                <Track displayName="Low Tom" name="low_tom" symbol="lt" struct={ltStruct} play={ltPlay} gain={ltGain} update={updateDrum} />
            </div>
            <div className="mt-4">
                <Track displayName="Middle Tom" name="middle_tom" symbol="mt" struct={mtStruct} play={mtPlay} gain={mtGain} update={updateDrum} />
            </div>
            <div className="mt-4">
                <Track displayName="High Tom" name="high_tom" symbol="ht" struct={htStruct} play={htPlay} gain={htGain} update={updateDrum} />
            </div>
            <div className="mt-4">
                <Track displayName="Ride Cymbal" name="ride_cymbal" symbol="rd" struct={rdStruct} play={rdPlay} gain={rdGain} update={updateDrum} />
            </div>
            <div className="mt-4">
                <Track displayName="Crash Cymbal" name="crash_cymbal" symbol="cr" struct={crStruct} play={crPlay} gain={crGain} update={updateDrum} />
            </div>
            <div className="mt-4">
                <Track displayName="Bass Drum" name="bass_drum" symbol="bd" struct={bdStruct} play={bdPlay} gain={bdGain} update={updateDrum} />
            </div>
        </div>
    )
}