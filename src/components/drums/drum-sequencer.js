
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { useState, useEffect, useRef } from "react";
import BassDrum from "./bass-drum";

export default function DrumSequencer({bassStruct, setBassStruct, steps, dBank, setDBank, dFast, setDFast, dSlow, setDSlow, dGain, setDGain, dLinger, setDLinger}) {

    // const [grid, setGrid] = useState(tracks.map(() => Array(steps).fill(false)));

    return (
        <BassDrum bassStruct={bassStruct} setBassStruct={setBassStruct} steps={steps} />
    )
}