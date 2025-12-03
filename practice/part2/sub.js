'use strict'
//Code starts here...
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", 400)
    .attr("height", 300);
//this draws the bounding box
let aSquare = svg.append("rect")
    .attr("width", 100)
    .attr("height",100)
    .attr("x", 300)
    .attr("y", 200)
    .attr("fill", "pink");
//now the code is reversed so this should draw a square...
let cx = aSquare.attr("x");
let cy = aSquare.attr("y");

let myCircle = svg.append("circle")
    .attr("r", 50)
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("fill", "green");


//...and THIS should draw a circle!

console.log('sub.js loaded');
//...and ends here