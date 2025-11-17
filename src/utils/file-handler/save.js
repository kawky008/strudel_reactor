import { useBassStore } from "../../stores/use-bass-store";
import { useDrumStore } from "../../stores/use-drum-store";
import { useGuitarStore } from "../../stores/use-guitar-store";
import { useKeyboardStore } from "../../stores/use-keyboard-store";
import { useSynthStore } from "../../stores/use-synth-store";

export default async function save() {
    const bass = useBassStore.getState().bass;
    const drum = useDrumStore.getState().drum;
    const guitar = useGuitarStore.getState().guitar;
    const keyboard = useKeyboardStore.getState().keyboard;
    const synth = useSynthStore.getState().synth;

    const state = { bass, drum, guitar, keyboard, synth };

    const jsonString = JSON.stringify(state, null, 2);

    // open file dialog and save
    try {
        const handle = await window.showSaveFilePicker({
            types: [
                {
                    description: "JSON file",
                    accept: {"application/json": [".json"]},
                },
            ],
        });

        const writable = await handle.createWritable();
        await writable.write(jsonString);
        await writable.close();

        console.log("Successfully saved file.");
    }
    catch (err) {
        console.error("Something went wrong:", err);
    }
}