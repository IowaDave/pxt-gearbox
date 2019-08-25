/**
 * Custom blocks from the series MakeCode Beyond the LED
 * by David Sparks
 */
//% weight=60 color=#ff8c00 icon="\uf085"
//% groups=['others', 'Constants', 'Booleans', 'Functions']
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
    //% block="pi"
    //% group="Constants"
    export function pi():number {
        return Math.PI;
    }
    /**
     * return number of radians per one degree
     */
    //% block="radiansPerOneDegree"
    //% group="Constants"
    export function radiansPerDegree(): number {
        return 2 * Math.PI /360;
    }
    /**
     * return number of degrees per one radian
     */
    //% block="degreesPerOneRadian"
    //% group="Constants"
    export function degreesPerRadian(): number {
        return 360/(2 * Math.PI);
    }
    /**
     * return a compass heading given radians
     * @param radians eg:1
     */
    //% block=convert|%radians|radians|to|heading
    //% group="Functions"
    export function rad2head(radians: number): number {
        // limit the maximum value to 2*pi radians
        while (radians > (2 * Math.PI)) {
            radians -= (2 * Math.PI);
        }
        let degrees = radians * degreesPerRadian();
        if (degrees > 90) {
            return 450.0 - degrees;
        } else {
            return 90.0 - degrees;
        }
    }
    /**
     * return a compass heading given Cartesian
     * coordinates x and y
     * @param x eg:1
     */
    //% block="convert coordinates x=|%x|and y=|%y| to heading"
    //% group="Functions"
    export function coords2head(x: number, y:number): number {
        if (x == 0) {
            if (y == 0) {
                return undefined;
            }
            if (y > 0) {
                return 0.0;
            } else {
                return 180.0;
            }
        }
        return rad2head(Math.atan2(y, x));
    }
    /**
     * return a number rounded to user-specified
     * precision of 0 to 15 decimal places
     * @param precision eg:2
     */
    //% block=round|%value|to|%precision|places
    //% group="Functions"
    export function round(value: number, precision:number): number {
        return Math.roundWithPrecision(value, precision);
    }
    /**
     * Another name for the "ceiling" math block.
     * Returns the lowest integer that is
     * more than the argument.
     */
    //% block
    //% group="Functions"
    export function roundUp(arg: number): number {
        return Math.ceil(arg);
    }
    /**
     * Another name for the "floor" math block.
     * Returns the greatest integer that is
     * less than the argument.
     */
    //% block
    //% group="Functions"
    export function roundDown(arg: number): number {
        return Math.floor(arg);
    }
    /**
     * Another name for the "truncate" math block.
     * Returns the nearest integer that is
     * closer to zero than the argument.
     */
    //% block
    //% group="Functions"
    export function roundTowardZero(arg: number): number {
        return Math.trunc(arg);
    }
}
