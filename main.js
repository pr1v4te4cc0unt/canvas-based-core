import { CanvasCircle2D } from "./canvas/model/canvasCircle2D.js";
import { CanvasRect2D } from "./canvas/model/canvasRect2D.js";
import { CanvasLine2D } from "./canvas/model/canvasLine2D.js";
import { TestCanvasRect2D } from "./test/canvas/model/testCanvasRect2D.js";
import { RectCollisionDetection } from "./collisionDetection/rectCollisionDetection.js";

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var circle = new CanvasCircle2D(ctx, 50, 50, 10);
console.log(circle);

setInterval(() => circle.draw(), 1000);
setInterval(() => circle.clear(), 2000);

var rectOne = new TestCanvasRect2D(ctx, 100, 50, 10, 10).setStyle("black");
rectOne.draw();
// console.log(rectOne);

var rectTwo = new TestCanvasRect2D(ctx, 120, 50, 10, 10).setStyle("green");
rectTwo.draw();
// console.log(rectTwo);

var rectThree = new TestCanvasRect2D(ctx, 140, 50, 10, 10).setStyle("blue");
rectThree.draw();

var gameObjects = [rectOne, rectTwo, rectThree];

detectCollisions();

rectOne.draw();
rectTwo.draw();
rectThree.draw();
// console.log(rectOne);


function detectCollisions(){
    let obj1;
    let obj2;

    // Reset collision state of all objects
    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].setIsColliding(false);
        console.log(gameObjects[i]);
    }

    // Start checking for collisions
    for (let i = 0; i < gameObjects.length; i++)
    {
        obj1 = gameObjects[i];
        for (let j = i + 1; j < gameObjects.length; j++)
        {
            obj2 = gameObjects[j];

            // Compare object1 with object2
            if (RectCollisionDetection.intersectXAxis(obj1, obj2)){
                obj1.isColliding = true;
                obj2.isColliding = true;
            }
        }
    }
}

