class Bullet {
    constructor() {
      this.radius = 15
      this.x = player.x
      this.y = player.y - player.radius
      this.vy = -12 // Velocity y
    
    }
    draw(ctx) {

        ctx.save()
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        ctx.fill()
        ctx.restore()
      
      ctx.restore()
    }
    update() {
      this.y += this.vy
      
    }
  
  }