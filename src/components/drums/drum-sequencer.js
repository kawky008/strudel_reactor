
import { useState, useEffect, useRef } from "react";
import Hihat from "./hihat";
import OpenHihat from "./open-hihat";
import SnareDrum from "./snare-drum";
import RimShot from "./rim-shot";
import LowTom from "./low-tom";
import MiddleTom from "./middle-tom";
import HighTom from "./high-tom";
import BassDrum from "./bass-drum";
import RideCymbal from "./ride-cymbal";
import CrashCymbal from "./crash-cymbal";

export default function DrumSequencer() {
    return (
        <div className="row justify-content-start align-content-start">
            <div className="col-4">
                <div>Hihat</div>
                <div>Open Hihat</div>
                <div>Snare Drum</div>
                <div>Rim Shot</div>
                <div>Low Tom</div>
                <div>Middle Tom</div>
                <div>High Tom</div>
                <div>Ride Cymbal</div>
                <div>Crash Cymbal</div>
                <div>Bass Drum</div>
            </div>
            <div className="col-8">
                {/* <div className="mt-3">
                    <Hihat />
                </div>
                <div className="mt-3">
                    <OpenHihat />
                </div>
                <div className="mt-3">
                    <SnareDrum />
                </div>
                <div className="mt-3">
                    <RimShot />
                </div>
                <div className="mt-3">
                    <LowTom />
                </div>
                <div className="mt-3">
                    <MiddleTom />
                </div>
                <div className="mt-3">
                    <HighTom />
                </div>
                <div className="mt-3">
                    <RideCymbal />
                </div>
                <div className="mt-3">
                    <CrashCymbal />
                </div> */}
                <div className="mt-3">
                    <BassDrum />
                </div>
            </div>
        </div>
    )
}