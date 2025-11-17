import { useBassStore } from "../../stores/use-bass-store";
import { useDrumStore } from "../../stores/use-drum-store";
import { useGuitarStore } from "../../stores/use-guitar-store";
import { useKeyboardStore } from "../../stores/use-keyboard-store";
import { useSynthStore } from "../../stores/use-synth-store";


export default function resetAllStore() {
    const resetDrums = useDrumStore.getState().resetState;
    const resetBass = useBassStore.getState().resetState;
    const resetGuitar = useGuitarStore.getState().resetState;
    const resetKeyboard = useKeyboardStore.getState().resetState;
    const resetSynth = useSynthStore.getState().resetState;

    resetDrums();
    resetBass();
    resetGuitar();
    resetKeyboard();
    resetSynth();

    console.log("Successfully reseted all state.")
}