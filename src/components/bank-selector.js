import React, { useState } from "react";
import { useDrumStore } from "../stores/use-drum-store.js";

export default function BankSelector() {
    const banks = [
        "AkaiMPC60",
        "AlesisSR16",
        "EmuSP12",
        "LinnDrum",
        "LinnLM1",
        "OberheimDMX",
        "RolandTR606",
        "RolandTR707",
        "RolandTR808",
        "RolandTR909",
    ]

    const bank = useDrumStore((state) => state.drums.settings.bank);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    return (
        <select
            className="dropdown"
            value={bank}
            onChange={(e) => updateDrum("settings", { bank: e.target.value })}
        >
        {banks.map((name) => (
            <option key={name} value={name}>
            {name}
            </option>
        ))}
        </select>
    );
}
