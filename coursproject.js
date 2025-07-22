'use strict';

import context from "./scripts copy/context.js";
import * as Utils from "./scripts copy/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

let bubbles = [];



setup();
update();

function setup() {
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





