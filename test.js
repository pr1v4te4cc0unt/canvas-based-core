import * as Core from "./module.js";

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// var circle = new Core.CanvasCircle2D(50, 50, 10);
// console.log(circle);

// setInterval(() => circle.draw(ctx), 1000);
// setInterval(() => circle.clear(), 2000);

var rectOne = new Core.CanvasRect2D(100, 50, 30, 30);
rectOne.setRotationSpeed(0.05).draw(ctx);
// console.log(rectOne);

var rectTwo = new Core.CanvasRect2D(130, 50, 10, 10).setStyle("green");
rectTwo.draw(ctx);
// console.log(rectTwo);

var rectThree = new Core.CanvasRect2D(150, 50, 10, 10).setStyle("blue");
rectThree.setRotationSpeed(-0.05).draw(ctx);
// console.log(rectOne);

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    rectOne.spin(ctx);

    rectTwo.draw(ctx);

    rectThree.draw(ctx);

    requestAnimationFrame(animate);
}

animate();

