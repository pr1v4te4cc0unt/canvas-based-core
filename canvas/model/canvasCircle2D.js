import { Circle2D } from "../../geometry/module.js";
import { StyleType } from "../styleType.js";

export class CanvasCircle2D extends Circle2D {

    //props
    styleType;
    style;

    //ctor
    constructor(
        ctx, 
        x, 
        y, 
        radius = 0, 
        style = "#000000", 
        styleType = StyleType.FILL, 
        xVelocity = 0.00, 
        yVelocity = 0.00
    ) {
        super(
            x, 
            y, 
            radius, 
            xVelocity, 
            yVelocity
        );
        this.ctx = ctx;
        this.styleType = styleType;
        this.style = style;
    }

    setStyleType(val){
        this.styleType = val;
        return this;
    }

    setStyle(val){
        this.style = val;
        return this;
    }

    draw(){
        this.#resolveDraw();
    }

    #resolveDraw(){
        switch(this.styleType){
            case StyleType.FILL:
                this.ctx.fillStyle = this.style;
                this.ctx.beginPath();
                this.ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
                this.ctx.fill();
                break;
            case StyleType.STROKE:
                this.ctx.strokeStyle = this.style;
                this.ctx.beginPath();
                this.ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
                this.ctx.stroke();
        }
    }

    clear(){
        const x = (this.x - this.radius);
        const y = (this.y - this.radius);
        const diameter = (this.radius * 2);
        this.ctx.clearRect(x, y, diameter, diameter);
    }
}