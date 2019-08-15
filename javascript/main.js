let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");


const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

let frame=0
let shooter = new Shooter()
let bullets
    


function animation() {
    updateEverything();
    drawEverything()
    window.requestAnimationFrame(animation);

}
animation()


function drawEverything() {
    drawGame(ctx)
}



function drawGame(ctx) {
    ctx.save();
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Clear the canvas
    shooter.draw(ctx)
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].draw(ctx);
    }
    ctx.restore();
}
function updateEverything() {
    frame++
    shooter.update()
    for(let bullet of bullets) {
        bullet.update()
    }
    if (shooter.shoot) {
        if (shooter.frameBeforeShooting === 0) {
          bullets.push(new Bullet())
          shooter.frameBeforeShooting = 30
    
        }
      }
}