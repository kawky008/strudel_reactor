import { settings } from "@strudel/codemirror";
import { useDrumStore } from "./stores/use-drum-store";


export function MyTunes({BPM}) {
    const state = useDrumStore.getState();
    const drumStack = state.getDrumStr();
    const bank = state.drums.settings.bank;

    return `
    setcps(${BPM}/60/4)
    samples('https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json')
    drums:
    ${drumStack}
    .bank("${bank}")
    `;
}