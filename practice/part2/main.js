'use strict'
//Code starts here...
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", 400)
    .attr("height", 300);
//this draws the bounding box
let myCircle = svg.append("circle")
    .attr("r", 50)
    .attr("cx", 300)
    .attr("cy", 200)
    .attr("fill", "green");
//this should draw a circle
let rectangleX = myCircle.attr("cx")
let rectangleY = myCircle.attr("cy")

let aSquare = svg.append("rect")
    .attr("width", 100)
    .attr("height",100)
    .attr("x", rectangleX)
    .attr("y", rectangleY)
    .attr("fill", "pink");
//and this should draw a square!

console.log('main.js loaded');
//...and ends here