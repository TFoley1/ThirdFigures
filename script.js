let canvas;
let bg;
let shapes = [];

let numSqaures;
let numCircles;
let numArcs;

$(document).ready(function(){
    // Runs when doc loads
});


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index","-1");

    angleMode(DEGREES)

    numSqaures = random(3,7);
    numCircles = random(3,9); 
    numArcs = random(3,5);   
    // Create Random BG
    bg = color(random(140,235),random(140,235),random(140,235));
    
    // Create some squares
    for (let i=0;i<numSqaures;i++){
        shapes.push(new Shape("sqaure",getRandomBoolean()));
    }

    // Create some circles
    for (let i=0;i<numCircles;i++) {
        shapes.push(new Shape("circle",getRandomBoolean()));
    }

    // Create some arcs
    for (let i=0;i<numArcs;i++) {
        shapes.push(new Shape("arc",getRandomBoolean()));
    }
    // Create some arcs
    for (let i=0;i<numArcs;i++) {
        shapes.push(new Shape("three",getRandomBoolean()));
    }

    shapes.sort();
}

function draw() {
    background(bg);

    for (let i=0;i<shapes.length;i++) {
        noStroke();
        shapes[i].show();
    }
   
}


// Resize the canvas when the
// browser's size changes.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function getRandomBoolean() {
  return Math.random() < 0.5; // Returns true if the random number is less than 0.5, otherwise false.
}