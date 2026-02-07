import { Arc2D } from "../../geometry/module.js";
import { StyleType } from "../styleType.js";

export class CanvasArc2D extends Arc2D {

    //props
    styleType;
    style;

    //ctor
    constructor(
        x, 
        y, 
        radius = 0, 
        startAngle = 0, 
        endAngle = 0, 
        style = "#000000", 
        styleType = StyleType.FILL, 
        xVelocity = 0.00, 
        yVelocity = 0.00
    ) {
        super(
            x, 
            y, 
            radius, 
            startAngle, 
            endAngle, 
            xVelocity, 
            yVelocity
        );
        this.styleType = styleType;
        this.style = style;
    }

    setCTX(val){
        this.ctx = val;
        return this;
    }

    setStyleType(val){
        this.styleType = val;
        return this;
    }

    setStyle(val){
        this.style = val;
        return this;
    }

    draw(ctx){
        this.#resolveDraw(ctx);
    }

    #resolveDraw(ctx){
        switch(this.styleType){
            case StyleType.FILL:
                ctx.fillStyle = style;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
                ctx.fill();
                break;
            case StyleType.STROKE:
                ctx.strokeStyle = this.style;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
                ctx.stroke();
        }
    }

    clear(){
        const x = (this.x - this.radius);
        const y = (this.y - this.radius);
        const diameter = (this.radius * 2);
        this.ctx.clearRect(x, y, diameter, diameter);
    }
}