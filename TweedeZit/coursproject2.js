'use strict';

import context from "../scripts copy/context.js";
import * as Utils from "../scripts copy/utils.js";

import spacevader2 from "../TweedeZit/spacelvader2.js"; 

let width = context.canvas.width;
let height = context.canvas.height;

let bubbles = [];
let rectangles = []; 
let borderRectangles = [];

document.onmousemove = move;

setup();
update();

function setup() {
    createRectangles();
    createBorder();
   

    for (let i = 0; i < 2; i++) {
        pushbubble();
    }
  
}

function pushbubble() {

    const border = borderRectangles[0]; 
    const bubbleSize = 10;

    const randomY = border.rectY + bubbleSize + Math.random() * (border.rectHeight - bubbleSize * 2);

    let bubble = {
        size: bubbleSize,
        x: width / 2,
        y: randomY, 
        hSpeed:  7,    
        vSpeed: 7,
    };
    bubbles.push(bubble);
}

function createRectangles() {
    let rect1 = {
        rectX: width / 20,
        rectY: 10,
        rectWidth: 10,
        rectHeight: 100,
        rectSpeed: 10,
    };
	
    rectangles.push(rect1);

    let rect2 = {
        rectX:  (width / 20) * 19 - 10 , 
        rectY: 10,
        rectWidth: 10,
        rectHeight: 100,
    };
    rectangles.push(rect2);
}

function createBorder() { 
  let border = { 
    rectX: 20,
    rectY: 20,
    rectWidth: width - 40,
    rectHeight: height - 40,
    }; 
    borderRectangles.push(border);
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    
    updateAndDrawRectangles();
    createLineCircleText();
    drawBorder();
    drawbubble();
    space();

    requestAnimationFrame(update);
}

function drawbubble() {
     const border = borderRectangles[0];

    for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];

        context.fillStyle = 'green';
        Utils.fillCircle(bubble.x, bubble.y, bubble.size); 
        
        bubble.x += bubble.hSpeed;
        bubble.y += bubble.vSpeed;

        if (bubble.x + bubble.size >= border.rectX + border.rectWidth || bubble.x - bubble.size 
            <= border.rectX) {

            bubble.hSpeed *= -1;
        }
        
        if (bubble.y + bubble.size >= border.rectY + border.rectHeight || bubble.y - bubble.size 
            <= border.rectY) {

            bubble.vSpeed *= -1;
        }

        for (let j = 0; j < rectangles.length; j++) {
            let rect = rectangles[j];
            if (bubble.x + bubble.size > rect.rectX &&
                bubble.x - bubble.size < rect.rectX + rect.rectWidth &&
                bubble.y + bubble.size > rect.rectY &&
                bubble.y - bubble.size < rect.rectY + rect.rectHeight) {
                
               bubble.hSpeed *= -1;
            }
        }
    }
}

/**
 * 
 * @param {MouseEvent} e 
 */

function move(e) {
    // const border = borderRectangles[0]; 

    let rightRectangle = rectangles[1];
    rightRectangle.rectY = e.clientY - rightRectangle.rectHeight / 2;

}


function updateAndDrawRectangles() {
    const border = borderRectangles[0];

    for (let i = 0; i < rectangles.length; i++) {
        let rect = rectangles[i];

        context.fillStyle = 'darkgreen';
        context.fillRect(rect.rectX, rect.rectY, rect.rectWidth, rect.rectHeight);
        
        if (i == 0) { 
            rect.rectY += rect.rectSpeed;

            if (rect.rectY < border.rectY || rect.rectY + rect.rectHeight > border.rectY + 
                border.rectHeight) {
                
                rect.rectSpeed *= -1;
            }
        }
        
    }
}

function drawBorder() { 
    
    for (let i = 0; i < borderRectangles.length; i++) {
        let border = borderRectangles[i];

        context.strokeStyle = "darkgreen";
        context.lineWidth = 5; 
        
        context.strokeRect(border.rectX, border.rectY, border.rectWidth, border.rectHeight);
    }
}

function createLineCircleText(){ 
    const border = borderRectangles[0];

    context.strokeStyle = "darkgreen";

    context.beginPath();
    context.moveTo(width / 2, border.rectY); 
    context.lineTo(width / 2, border.rectY + border.rectHeight);
    context.stroke();

    const smallestDimension = Math.min(border.rectWidth, border.rectHeight);
    const radius = smallestDimension * 0.20; 

    context.beginPath();
    context.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
    context.stroke();

    const fontSize = radius * 0.5; 

    context.fillStyle = "darkgreen";
    context.font = "bold " + fontSize + "px Arial"; 

    context.textAlign = "center";
    context.textBaseline = "middle";

    context.fillText("loïc stas", width / 2, height / 2);

}

function space(){ 
    
    context.save(); 

    const patternTotalWidth = 350; 
    const patternTotalHeight = 350; 
    const margin = 20;
    const scaleFactor = 0.2; 

    const drawX = width - (patternTotalWidth * scaleFactor) - margin;
    const drawY = height - (patternTotalHeight * scaleFactor) - margin;

    context.translate(drawX, drawY);
    context.scale(scaleFactor, scaleFactor);

    spacevader2(context);

    context.restore(); 
}
