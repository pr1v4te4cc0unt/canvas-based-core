import { Object2D } from "./object2D.js";
import { Point2D } from "../point2D.js";
import { Line2D } from "./line2D.js";

export class Rect2D extends Object2D {
    
    //props
    height = 0;
    width = 0;

    //ctor
    constructor(
        x, 
        y, 
        height, 
        width, 
        xVelocity = 0.00, 
        yVelocity = 0.00
    ) {
        super(
            x, 
            y, 
            xVelocity, 
            yVelocity
        );
        this.height = height;
        this.width = width;
    }

    setHeight(val){
        this.height = val;
        return this;
    }

    setWidth(val){
        this.width = val;
        return this;
    }

    getTopLeftCoord(){
        const x = this.x;
        const y = this.y;
        return new Point2D(x, y);
    }

    getTopRightCoord(){
        const x = (this.x + this.width);
        const y = this.y;
        return new Point2D(x, y);
    }

    getTop(){
        return new Line2D(this.x, this.y, this.x + this.width, this.y);
    }

    getBottomRightCoord(){
        const x = (this.x + this.width);
        const y = (this.y + this.height);
        return new Point2D(x, y);
    }

    getBottomLeftCoord(){
        const x = this.x;
        const y = (this.y + this.height);
        return new Point2D(x, y);
    }

    getBottom(){
        return new Line2D(this.x, this.y + this.height, this.x + this.width, this.y + this.height);
    }

    getCenterCoord(){
        const x = ((this.x + this.width) / 2);
        const y = ((this.y + this.height) / 2);
        return new Point2D(x, y);
    }

    getCoordinates(){
        //clockwise from origin x, y ie topleft
        //[topleft, topright, bottomright, bottomleft, center]
        return [this.getTopLeftCoord(), this.getTopRightCoord(), this.getBottomRightCoord(), this.getBottomLeftCoord(), this.getCenterCoord()];
    }
}