import { Object2D } from "../../2D/model/object2D.js";

export class Object3D extends Object2D {

    //props
    z;
    zVelocity = 0.00;

    //ctor
    constructor(x, y, z, xVelocity = 0.00, yVelocity = 0.00, zVelocity = 0.00) {
        super(x, y, xVelocity, yVelocity);
        this.z = z;
        this.zVelocity = zVelocity;
    }

    setZ(val){
        this.z = val;
        return this;
    }

    setZVelocity(val){
        this.zVelocity = val;
        return this;
    }

    moveZByZVelocity(){
        this.z += this.zVelocity; 
    }

}