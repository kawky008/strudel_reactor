export function MyTunes({
    steps,
    // drums
    dBank, dFast, dSlow, dGain, dLinger,
    bassStruct,
}) {
    return `
    setcps(140/60/4)

    samples('https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json')
    
    drum: s("${bassStruct}").bank("${dBank}").gain(${dGain}).fast(${dFast})`
}