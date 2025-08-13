'use strict';

import context from "../scripts copy/context.js";
import * as Utils from "../scripts copy/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

let bubbles = [];



setup();
update();


function setup() {

    createRectangles();
    createBorder();

    for (let i = 0; i < 5; i++) {
        pushbubble();
    }
  
}

function pushbubble() {

    let bubble = {
        size: 10,
        x: width / 2,
        y: height / 2,
        hSpeed:  Math.random() * 10,    
        vSpeed: Math.random() * 10,
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
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    drawbubble();
    

    requestAnimationFrame(update);
}

function drawbubble() {

    for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];

        context.fillStyle = 'red';
        Utils.fillCircle(bubble.x, bubble.y, bubble.size); 
        
        bubble.x += bubble.hSpeed;
        bubble.y += bubble.vSpeed;

             
        if (bubble.x + bubble.size >= width || bubble.x - bubble.size <= 0) {
            bubble.hSpeed *= -1;
        }
        
     
        if (bubble.y + bubble.size >= height || bubble.y - bubble.size <= 0) {
            bubble.vSpeed *= -1;
        }
    }
}

