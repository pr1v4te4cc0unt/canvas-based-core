import { CollisionDetection } from "./collisionDetection.js";
import { Point2D } from "../point2D.js";

export class CollisionDetection2D extends CollisionDetection {

    constructor() {
        super();
    }

    static leftCollisionDetected(source, target) {
        const sourceLeft = source.x;
        const sourceRight = source.x + source.width;
        const targetLeft = target.x;

        return (
            sourceRight > targetLeft &&
            sourceLeft < targetLeft &&
            this.#isWithinYRange(source, target)
        );
    }

    static rightCollisionDetected(source, target) {
        const sourceLeft = source.x;
        const sourceRight = source.x + source.width;
        const targetRight = target.x + target.width;

        return (
            sourceLeft < targetRight &&
            sourceRight > targetRight &&
            this.#isWithinYRange(source, target)
        );
    }

    static horizontalCollisionDetected(source, target) {
        return (
            this.leftCollisionDetected(source, target) ||
            this.rightCollisionDetected(source, target)
        );
    }

    static topCollisionDetected(source, target) {
        const sourceTop = source.y;
        const sourceBottom = source.y + source.height;
        const targetTop = target.y;

        return (
            sourceBottom > targetTop &&
            sourceTop < targetTop &&
            this.#isWithinXRange(source, target)
        );
    }

    static bottomCollisionDetected(source, target) {
        const sourceTop = source.y;
        const sourceBottom = source.y + source.height;
        const targetBottom = target.y + target.height;

        return (
            sourceTop < targetBottom &&
            sourceBottom > targetBottom &&
            this.#isWithinXRange(source, target)
        );
    }

    static verticalCollisionDetected(source, target) {
        return (
            this.topCollisionDetected(source, target) ||
            this.bottomCollisionDetected(source, target)
        );
    }

    static collisionDetected(source, target) {
        return (
            this.horizontalCollisionDetected(source, target) ||
            this.verticalCollisionDetected(source, target)
        );
    }

    static getLeftCollisionDetected(source, target) {
        return this.leftCollisionDetected(source, target)
            ? { source: new Point2D(source.x, source.y), target: new Point2D(target.x, target.y) }
            : null;
    }

    static getRightCollisionDetected(source, target) {
        return this.rightCollisionDetected(source, target)
            ? { source: new Point2D(source.x, source.y), target: new Point2D(target.x, target.y) }
            : null;
    }

    static getHorizontalCollisionDetected(source, target) {
        return this.horizontalCollisionDetected(source, target)
            ? { source: new Point2D(source.x, source.y), target: new Point2D(target.x, target.y) }
            : null;
    }

    static getTopCollisionDetected(source, target) {
        return this.topCollisionDetected(source, target)
            ? { source: new Point2D(source.x, source.y), target: new Point2D(target.x, target.y) }
            : null;
    }

    static getBottomCollisionDetected(source, target) {
        return this.bottomCollisionDetected(source, target)
            ? { source: new Point2D(source.x, source.y), target: new Point2D(target.x, target.y) }
            : null;
    }

    static getVerticalCollisionDetected(source, target) {
        return this.verticalCollisionDetected(source, target)
            ? { source: new Point2D(source.x, source.y), target: new Point2D(target.x, target.y) }
            : null;
    }

    static getCollisionDetected(source, target) {
        return this.collisionDetected(source, target)
            ? { source: new Point2D(source.x, source.y), target: new Point2D(target.x, target.y) }
            : null;
    }

    static #isWithinXRange(source, target) {
        const sourceRight = source.x + source.width;
        const targetRight = target.x + target.width;
        return source.x < targetRight && sourceRight > target.x;
    }

    static #isWithinYRange(source, target) {
        const sourceBottom = source.y + source.height;
        const targetBottom = target.y + target.height;
        return source.y < targetBottom && sourceBottom > target.y;
    }
}