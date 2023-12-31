import React, { useEffect,useState } from "react";
import * as d3 from "d3";
import { useD3 } from "../hooks/d3hook";

// export const Bar = (props) => {
//   const [data,setData] = useState(props.barData)

//   useEffect(()=>{
//     setData(props.barData)
//   })
//   const ref = useD3(
//     (svg) => {
//       const height = 300;
//       const width = 500;
//       const margin = { top: 20, right: 30, bottom: 30, left: 40 };

//       const x = d3
//         .scaleBand()
//         .domain(data.map((d) => d.year))
//         .rangeRound([margin.left, width - margin.right])
//         .padding(0.1);

//       const y1 = d3
//         .scaleLinear()
//         .domain([0, d3.max(data, (d) => d.sales)])
//         .rangeRound([height - margin.bottom, margin.top]);

//       const xAxis = (g) =>
//         g.attr("transform", `translate(0,${height - margin.bottom})`).call(
//           d3
//             .axisBottom(x)
//             .tickValues(
//               d3
//                 .ticks(...d3.extent(x.domain()), width / 40)
//                 .filter((v) => x(v) !== undefined)
//             )
//             .tickSizeOuter(0)
//         );

//       const y1Axis = (g) =>
//         g
//           .attr("transform", `translate(${margin.left},0)`)
//           .style("color", "steelblue")
//           .call(d3.axisLeft(y1).ticks(null, "s"))
//           .call((g) => g.select(".domain").remove())
//           .call((g) =>
//             g
//               .append("text")
//               .attr("x", -margin.left)
//               .attr("y", 10)
//               .attr("fill", "currentColor")
//               .attr("text-anchor", "start")
//               .text(data.y1)
//           );

//       svg.select(".x-axis").call(xAxis);
//       svg.select(".y-axis").call(y1Axis);

//       svg
//         .select(".plot-area")
//         .attr("fill", "green")
//         .selectAll(".bar")
//         .data(data)
//         .join("rect")
//         .attr("class", "bar")
//       .attr("x", (d) => x(d.year))
//       .attr("width", x.bandwidth())
//       .attr("y", (d) => y1(d.sales))
//       .attr("height", (d) => y1(0) - y1(d.sales));
//         // .attr("x", (d, i) => i * (width / data.length))
//         // .attr("y", (d) => height - d * (height / 100))
//         // .attr("width", 0.8 * (width / data.length))
//         // .attr("height", (d) => d * (height / 100));
//     },
//     [data.length]
//   );
//   // should use useEffect
//   return (
//     <svg
//       ref={ref}
//       className="svgWidth"
//       style={{
//         height: "45vh",
//         width: "90%",
//         marginRight: "0px",
//         marginLeft: "0px",
//       }}
//     >
//       <g className="plot-area" />
//       <g className="x-axis" />
//       <g className="y-axis" />
//     </svg>
//   );
// };
const height = 500;
const width = 500;
export const Bar = ( props ) =>{
  const [data,setData] = useState(props.barData)

  useEffect(()=>{
    setData(props.barData)
  })
  const ref = useD3(
    (svg) => {
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      var tooltip = d3.select('.tooltip-area')
        .style('opacity', 0);

      svg
        .select(".plot-area")
        .attr("fill", "green")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.sales))
        .attr("height", (d) => y1(0) - y1(d.sales))
        .append('title')
        .text((d) => `Sales were ${d.sales} in ${d.year}`);
    },
    [data.length]
  );

  return (
    <>
      <svg
        ref={ref}
        viewBox={`0 0 ${height} ${width}`}
        style={{
          height: "100%",
          marginRight: "0px",
          marginLeft: "0px",
        }}
      >
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
        <g className="tooltip-area">
          <text className="tooltip-area__text">aas</text>
        </g>
      </svg>
    </>
  );
}
