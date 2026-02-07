import { Object2D } from "./object2D.js";

export class Line2D extends Object2D {

    //props
    targetX = 0;
    targetY = 0;

    //ctor
    constructor(
        x, 
        y, 
        targetX, 
        targetY
    ) {
        super(x, y);
        this.targetX = targetX;
        this.targetY = targetY;
    }

    setOriginX(val){
        this.x = val;
        return this;
    }

    setOriginY(val){
        this.y = val;
        return this;
    }

    setTargetX(val){
        this.targetX = val;
        return this;
    }

    setTargetY(val){
        this.targetY = val;
        return this;
    }
}