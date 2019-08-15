let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");


const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

let shooter = new Shooter()


function animation() {
    updateEverything();
    drawEverything()
    window.requestAnimationFrame(animation);

}
animation()


function drawEverything() {
    
}


function updateEverything() {
    // frame++
}
