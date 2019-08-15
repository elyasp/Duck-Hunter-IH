const SHOOTER_SIZE = -100
const MAX_TOP_SIZE = 100


class Shooter {
    constructor() {
        this.bottomX = 0
        this.bottomY = 0
        this.img = new Image();
        this.img.src = "images/gun-sprite.png";
        this.angle = 0
        this.movementDirection = 1;
        this.isMovingLeft = false;
        this.isMovingRight = false;   
        this.topX = this.bottomX;
        this.topY = SHOOTER_SIZE;
        this.shoot = true
        this.frameBeforeShooting = 3 // We need to wait 5 frames to shoot
        
        
        // ---------- COMMANDS -----------
        document.onkeydown = event => {
            if (event.keyCode === 37) {
                shooter.isMovingLeft = true
                    console.log("button pressed") 
              }
              // right
              if (event.keyCode === 39) {
                shooter.isMovingRight = true
                    console.log("button pressed")
              }
              if (event.keyCode === 32) {
                console.log("SHOOT")
                this.shoot = true
              }
            };
            document.onkeyup = event => {
              //left
              if (event.keyCode === 37) {
                shooter.isMovingLeft = false
              }
              // right
              if (event.keyCode === 39) {
                shooter.isMovingRight = false
              }
              if (event.keyCode === 32) {
                this.shoot = false
              }
            }
        
    }
    
    draw(ctx) {
        ctx.save();
        ctx.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT);
        ctx.rotate(this.angle);

        ctx.strokeStyle = "blue";
        ctx.fillStyle = "blue";

        ctx.beginPath();
        // ctx.drawImage(this.img, -SHOOTER_SIZE , -SHOOTER_SIZE , SHOOTER_SIZE*2, SHOOTER_SIZE*2);
        ctx.arc(this.bottomX, this.bottomY, 30, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.lineWidth = 15;
        ctx.moveTo(this.bottomX, this.bottomY);
        ctx.lineTo(this.topY/6, SHOOTER_SIZE);
        ctx.stroke();

        ctx.restore();
    }
    

    update() {
        if (this.isMovingLeft) this.angle -= 0.02;
        if (this.isMovingRight) this.angle += 0.02;
    }
}