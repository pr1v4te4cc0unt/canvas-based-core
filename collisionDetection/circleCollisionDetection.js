export class CircleCollisionDetection {

    static intersect(source, target){
        const squareDistance = (Math.pow((source.x - target.x), 2) + Math.pow((source.y - target.y), 2));
        return squareDistance <= Math.pow((source.radius + target.radius), 2);
    }

}