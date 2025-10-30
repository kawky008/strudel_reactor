import { settings } from "@strudel/codemirror";
import { useDrumStore } from "./stores/use-drum-store";


export function MyTunes({BPM}) {
    // drums
    const drumState = useDrumStore.getState();
    const drumStack = drumState.getDrumStr();
    const bank = drumState.drums.settings.bank;

    return `
    setcps(${BPM}/60/4)
    samples('https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json')
    drums:
    ${drumStack}
    .bank("${bank}")
    `;
}