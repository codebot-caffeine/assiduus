import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { useLocation } from "react-router-dom";

const Line = (props) => {
  const svgRef = useRef();
  const [data,setData] = useState(props.lineData)

  useEffect(() => {
    // setting up svg
    setData(props.lineData)
    const w = 400;
    const h = 200;
    const svg = d3
      .select(svgRef.current)
      .attr("width", h)
      .attr("height", h)
      .style("overflow", "visible")
      .style("background", "")

    // setting the scaleing
    // xscales
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    //yscales
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    //  Setup functions to draw Lines ---------------//
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    // setting the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(1 + data.length)
      .tickFormat((i) => i + 1);
    const yAxis = d3.axisLeft(yScale).ticks(7);
    svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);
    svg.append("g").call(yAxis);

    // setting up the data for the svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");

  }, [props.lineData]);
  return (
    <div>
        {/* <h2>Line Charts</h2> */}
      <svg ref={svgRef} style={{ margin: "100px", display: "block" }}></svg>
    </div>
  );
};

export default Line;