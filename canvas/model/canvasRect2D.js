import { Rect2D } from "../../geometry/module.js";
import { StyleType } from "../styleType.js";

export class CanvasRect2D extends Rect2D {

    //props
    styleType;
    style;
    rotation = 0.00;
    rotationSpeed = 0.00;

    //ctor
    constructor(
        x, 
        y, 
        height, 
        width, 
        style = "#000000", 
        styleType = StyleType.FILL, 
        xVelocity = 0.00, 
        yVelocity = 0.00, 
        rotation = 0.00, 
        rotationSpeed = 0.00
    ) {
        super(
            x, 
            y, 
            height, 
            width, 
            xVelocity, 
            yVelocity
        );
        this.styleType = styleType;
        this.style = style;
        this.rotation = rotation;
        this.rotationSpeed = rotationSpeed;
    }

    setStyleType(val){
        this.styleType = val;
        return this;
    }

    setStyle(val){
        this.style = val;
        return this;
    }

    setRotation(val){
        this.rotation = val;
        return this;
    }

    setRotationSpeed(val){
        this.rotationSpeed = val;
        return this;
    }

    draw(ctx){
        this.#resolveDraw(ctx, this.x, this.y);
    }

    rotate(ctx){
        this.#resetRotation();
        this.rotation += this.rotationSpeed;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        this.#resolveDraw(ctx, (-this.x / this.x), (-this.y / this.y));
        ctx.resetTransform();
        ctx.restore();
    }

    spin(ctx){
        this.#resetRotation();
        this.rotation += this.rotationSpeed;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        this.#resolveDraw(ctx, (-this.width / 2), (-this.height / 2));
        ctx.resetTransform();
        ctx.restore();
    }

    clear(ctx){
        ctx.clearRect(this.x, this.y, this.width, this.height);
    }

    #resolveDraw(ctx, x, y){
        switch(this.styleType){
            case StyleType.FILL:
                ctx.fillStyle = this.style;
                ctx.fillRect(x, y, this.width, this.height);
                break;
            case StyleType.STROKE:
                ctx.strokeStyle = this.style;
                ctx.strokeRect(x, y, this.width, this.height);
        }
    }
    
    #resetRotation(){
        if(this.rotation > (2 * Math.PI)){
            this.rotation = 0;
        }
    }
}