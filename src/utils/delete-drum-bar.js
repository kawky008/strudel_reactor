import { useDrumStore } from "../stores/use-drum-store";

export default function deleteDrumBar() {
    const drums = useDrumStore.getState().drums;
    const updateDrum = useDrumStore.getState().updateDrum;

    if (drums.bass_drum.struct.length > 32 &&
        window.confirm("Do you want to delete a bar? This action cannot be undone."))
    {
        // delete one bar from every drum component
        Object.entries(drums).forEach(([name, drum]) => {
            if (name === "settings") return;

            const newStruct = drum.struct.slice(0, -16);
            updateDrum(name, { struct: newStruct });
        });

        // slow -1
        const newSlow = drums.settings.slow - 1;
        updateDrum("settings", { slow: newSlow });
    }
}