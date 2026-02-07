import { Line2D } from "../../geometry/module.js";

export class CanvasLine2D extends Line2D {

    //props
    style;

    //ctor
    constructor(
        x, 
        y, 
        targetX, 
        targetY, 
        style = "#000000"
    ){
        super(
            x, 
            y, 
            targetX, 
            targetY
        );
        this.style = style;
    }

    setCTX(val){
        this.ctx = val;
        return this;
    }

    draw(){
        this.ctx.strokeStyle = this.style;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.targetX, this.targetY);
        this.ctx.stroke();
    }
}