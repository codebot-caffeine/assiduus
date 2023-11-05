import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./sizes.css"

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
      .attr("stroke", "black")
      .attr("x", (d, i) => i * (w / data.length))
      .attr("y", (d) => h - d * (h / 100))
      .attr("width", 0.8 * (w / data.length))
      .attr("height", (d) => d * (h / 100));

  }, [props.lineData]);
  return (
    <div>
        {/* <h2>Line Charts</h2> */}
      <svg ref={svgRef} style={{
        // height: "40vh",
        // width: "90%",
        // marginRight: "0px",
        // marginLeft: "0px",
        // margin: "100px", 
        display: "block",
        padding:"0px 0px 0px 0px",
        alignSelf: "center"
      }} ></svg>
    </div>
  );
};

export default Line;