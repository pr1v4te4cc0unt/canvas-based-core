import { Object2D } from "./object2D.js";

export class Arc2D extends Object2D {

    //props
    radius = 0;
    startAngle = 0;
    endAngle = 0;

    constructor(
        x, 
        y, 
        radius = 0, 
        startAngle = 0, 
        endAngle = 0, 
        xVelocity = 0.00, 
        yVelocity = 0.00
    ) {
        super(
            x, 
            y, 
            xVelocity, 
            yVelocity
        );
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    setRadius(val){
        this.radius = val;
        return this;
    }

    setStartAngle(val){
        this.startAngle = val;
        return this;
    }

    setEndAngle(val){
        this.endAngle = val;
        return this;
    }

}