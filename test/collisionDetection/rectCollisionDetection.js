export class RectCollisionDetection {
    
    static intersect(source, target){
        return (this.intersectXAxis(source, target) || this.intersectYAxis(source, target)) ? true : false;
    }
    
    static intersectXAxis(source, target){
        return (((source.x + source.width) >= target.x) || (source.x <= (target.x + target.width))) ? true : false;
    }

    static intersectYAxis(source, target){
        return ((source.y + source.height) >= target.y) || (source.y <= (target.y + target.height)) ? true : false;
    }

}