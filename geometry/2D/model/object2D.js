export class Object2D {

    //props
    x = 0;
    y = 0;
    xVelocity = 0.00;
    yVelocity = 0.00;

    //ctor
    constructor(
        x = 0, 
        y = 0, 
        xVelocity = 0.00, 
        yVelocity = 0.00
    ) {
        this.x = x;
        this.y = y;
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
    }

    //prop methods
    setX(val){
        this.x = val;
        return this;
    }

    setY(val){
        this.y = val;
        return this;
    }

    setXVelocity(val){
        this.xVelocity = val;
        return this;
    }

    setYVelocity(val){
        this.yVelocity = val;
        return this;
    }
    //

    moveXByXVelocity(){
        this.x += this.xVelocity;
    }

    moveYByYVelocity(){
        this.y += this.yVelocity;
    }
}