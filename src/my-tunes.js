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
    const bank = drumState.drums.settings.bank;
    const slow = drumState.drums.settings.slow;

    return `
    setcps(${BPM}/60/4)

    samples('https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json')
    
    drums:
    ${drumStack}
    .bank("${bank}").slow(${slow})
    `;
}