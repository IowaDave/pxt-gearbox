/**
 * Custom blocks from the series MakeCode Beyond the LED
 * by David Sparks
 */
//% weight=60 color=#ff8c00 icon="\uf085"
namespace gearbox {
    /**
     * Write a comment
     * @param theComment eg:comment
     */
    //% block=//|%theComment
    export function comment(theComment: string): void {
        // do nothing
    }
        /**
     * return the value of pi
     */
    //% block
    export function pi():number {
        return Math.PI;
    }
    /**
     * return number of radians per one degree
     */
    //% block="radiansPerOneDegree"
    export function radiansPerDegree(): number {
        return 2 * Math.PI /360;
    }
    /**
     * return number of degrees per one radian
     */
    //% block="degreesPerOneRadian"
    export function degreesPerRadian(): number {
        return 360/(2 * Math.PI);
    }
    /**
     * return a compass heading given radians
     * @param radians eg:1
     */
    //% block=convert|%radians|radians|to|heading
    export function rad2head(radians: number): number {
        let degrees = radians * degreesPerRadian();
        if (degrees > 90) {
            return 450 - degrees;
        } else {
            return 90 - degrees;
        }
    }
    /**
     * return a compass heading given Cartesian
     * coordinates x and y
     * @param x eg:1
     */
    //% block="convert coordinates x=|%x|and y=|%y| to heading"
    export function coords2head(x: number, y:number): number {
        if (x == 0) {
            if (y == 0) {
                return undefined;
            }
            if (y > 0) {
                return 0;
            } else {
                return 180;
            }
        }
        return rad2head(Math.atan2(y, x));
    }
    /**
     * return a number rounded to precision
     * @param precision eg:2
     */
    //% block=round|%value|to|%precision|places
    export function round(value: number, precision:number): number {
        return Math.roundWithPrecision(value, precision);
    }
}
