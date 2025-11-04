import { settings } from "@strudel/codemirror";
import { useGlobalStore } from "./stores/use-global-store";
import { useDrumStore } from "./stores/use-drum-store";


export function MyTunes() {
    // global settings
    const globalState = useGlobalStore.getState();
    const BPM = globalState.BPM;

    // drums
    const drumState = useDrumStore.getState();
    const drumStack = drumState.getDrumStr();
    const drumBank = drumState.drums.settings.bank;
    const drumSlow = drumState.drums.settings.slow;
    const drumGain = drumState.drums.settings.gain;

    return `
    setcps(${BPM}/60/4)

    samples('https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json')
    
    drums:
    ${drumStack}
    .bank("${drumBank}").slow(${drumSlow}).gain(${drumGain})
    `;
}