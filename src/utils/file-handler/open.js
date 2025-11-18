import { useBassStore } from "../../stores/use-bass-store";
import { useDrumStore } from "../../stores/use-drum-store";
import { useGuitarStore } from "../../stores/use-guitar-store";
import { useKeyboardStore } from "../../stores/use-keyboard-store";
import { useSynthStore } from "../../stores/use-synth-store";

export default async function open(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);

            useBassStore.setState({ bass: data.bass });
            useDrumStore.setState({ drums: data.drums });
            useGuitarStore.setState({ guitar: data.guitar });
            useKeyboardStore.setState({ keyboard: data.keyboard });
            useSynthStore.setState({ synth: data.synth });

            console.log("Successfully opened JSON file");
        }
        catch (err) {
            console.error("Something went wrong:", err);
        }
    }
    reader.readAsText(file);
}