"use strict"

let drawingWidth = 500;
let drawingHeight = 500;

let sx = drawingWidth/2 - 100;
let sy = drawingHeight - 75;

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
function drawSnowman() {
    let snowmanBody = drawing.append("circle")
        .attr("cx", sx)
        .attr("cy", sy)
        .attr("r", 75)
        .attr("fill", "white");

    let hcx = sx;
    let hcy = sy - 100;

    let snowmanHead = drawing.append("circle")
        .attr("cx", hcx)
        .attr("cy", hcy)
        .attr("r", 50)
        .attr("fill", "white");

    let snowmanEyeLeft = drawing.append("circle")
        .attr("cx", hcx - 15)
        .attr("cy", hcy - 15)
        .attr("r", 5)
        .attr("fill", "black");

    let snowmanEyeRight = drawing.append("circle")
        .attr("cx", hcx + 15)
        .attr("cy", hcy - 15)
        .attr("r", 5)
        .attr("fill", "black");

    let snowmanMouth = drawing.append("line")
        .attr("x1", hcx - 20)
        .attr("x2", hcx + 20)
        .attr("y1", hcy + 15)
        .attr("y2", hcy + 15)
        .attr("stroke", "black")
        .attr("stroke-weight", 2);

    let snowmanNose = drawing.append("polyline")
        .attr("points", closedPolygon(hcx, hcy - 15,
            hcx - 5, hcy - 5,
            hcx + 20, hcy + 27,
            hcx + 20, hcy + 23))
        .attr("fill", "orange");
}

drawSnowman();

sx = sx + 100;

drawSnowman();

sx = sx + 100;
drawSnowman();
