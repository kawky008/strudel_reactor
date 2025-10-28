import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { useState, useEffect, useRef } from "react";

export default function MiddleTom({mtStruct, setMtStruct, steps}) {
    const [struct, setStruct] = useState(Array(steps * 4).fill("~"));

    // add or remove one 16th note
    function toggleNote(index) {
        setStruct(prev => {
            const newStr = [...prev];
            newStr[index] = prev[index] === "mt" ? "~" : "mt";
            return newStr;
        });
    }    
    // update bass struct when toggleNote is called
    useEffect(() => {
        setMtStruct(struct.join(" "));
    }, [struct]);

    const svgRef = useRef();

    const width = 25;
    const height = 50

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // calculate x y coordinates
        const sequence = [];
        struct.forEach((value, i) => {
            sequence.push({ index: i, note: value })
        })

        // data binding
        const rects = svg.selectAll("rect").data(sequence, d => d.index);

        // existing notes
        rects.attr("fill", d => (d.note === "mt" ? "white" : "#171717ff"));

        // new note
        rects.enter()
        .append("rect")
        .attr("x", d => (d.index * width))
        .attr("y", 0)
        .attr("width", width)
        .attr("height", height)
        .attr("fill", d => (d.note === "mt" ? "white" : "#171717ff"))
        .attr("stroke", "#797979ff")
        .attr("cursor", "pointer")
        .on("click", (event, d) => {toggleNote(d.index)});

        rects.exit().remove();

    }, [struct]);

    return (
        <svg ref={svgRef} width={struct.length * width} height={height} />
    )
}