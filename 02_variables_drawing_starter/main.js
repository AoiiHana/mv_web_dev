"use strict"

let drawingWidth = 500;
let drawingHeight = 500;
let sx = drawingWidth / 2; //this should equal 250 at current dimensions
let sy = drawingHeight - 100; //likewise this should be 400
let hx = sx;
let hy = sy - 200

/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", drawingWidth)
    .attr("height", drawingHeight);

/* Draw a border that matches the specified drawing area's size and fill the background with color for our white snowman. */
let border = drawing.append("rect")
    .attr("width", drawingWidth)
    .attr("height", drawingHeight)
    .attr("fill", "lightblue")
    .attr("stroke", "red");

/* Draw a snowman */

// Uncomment this code for a taller snowman!
let snowmanBase = drawing.append("circle")
    .attr("cx", sx)
    .attr("cy", sy)
    .attr("r", 100)
    .attr("fill", "white");

let snowmanBody = drawing.append("circle")
    .attr("cx", sx)
    .attr("cy", sy - 100)
    .attr("r", 75)
    .attr("fill", "white");

let snowmanHead = drawing.append("circle")
    .attr("cx", hx)
    .attr("cy", hy)
    .attr("r", 50)
    .attr("fill", "white");

let snowmanEyeLeft = drawing.append("circle")
    .attr("cx", Number(snowmanHead.attr("cx")) - 15)
    .attr("cy", Number(snowmanHead.attr("cy")) - 15)
    .attr("r", 5)
    .attr("fill", "black");

let snowmanEyeRight = drawing.append("circle")
    .attr("cx", Number(snowmanHead.attr("cx")) + 15)
    .attr("cy", Number(snowmanHead.attr("cy")) - 15)
    .attr("r", 5)
    .attr("fill", "black");

let snowmanMouth = drawing.append("line")
    .attr("x1", Number(snowmanHead.attr("cx")) - 20)
    .attr("x2", Number(snowmanHead.attr("cx")) + 20)
    .attr("y1", Number(snowmanHead.attr("cy")) + 15)
    .attr("y2", Number(snowmanHead.attr("cy")) + 15)
    .attr("stroke", "black")
    .attr("stroke-weight", 2);

let snowmanNose = drawing.append("polyline")
    .attr("points", closedPolygon(hx, hy - 15,
                                hx - 5,hy - 5,
                                hx + 5,hy + 5, 
                                hx + 20,hy + 27,
                                hx + 20,hy + 23))
    .attr("fill","orange");

let topHatBody = drawing.append("rect")
    .attr("x", hx - 30)
    .attr("y", hy - 120)
    .attr("width", 60)
    .attr("height", 70)
    .attr("fill", "black");

let topHatBase = drawing.append("rect")
    .attr("x", hx - 50)
    .attr("y", hy - 50)
    .attr("width", 100)
    .attr("height", 5)
    .attr("fill", "black")
// CHALLENGE: Can you use two rectangles to draw a hat on top of the snowman's head and then reposition it with the snowman? See lecture slides for a simple design!