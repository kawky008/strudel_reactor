import { useDrumStore } from "../stores/use-drum-store";

export default function addDrumBar() {
    const drums = useDrumStore.getState().drums;
    const updateDrum = useDrumStore.getState().updateDrum;

    // add one bar to every drum component
    Object.entries(drums).forEach(([name, drum]) => {
        if (name === "settings") return;

        const newStruct = [...drum.struct, ...Array(16).fill("~")];
        updateDrum(name, { struct: newStruct });
    });

    // slow +1
    const newSlow = drums.settings.slow + 1;
    updateDrum("settings", { slow: newSlow });
}