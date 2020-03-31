"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sampleClass = /** @class */ (function () {
    /**
     *
     * @param x - refers to the first number
     * @param y - refers to the second number
     */
    function sampleClass(x, y) {
        this.firstNumber = x;
        this.secondNumber = y;
    }
    /**
    * Comments about the class method. helpful for documenting code
    * @returns the sum of the first and second number
    */
    sampleClass.prototype.sampleClassMethod = function () {
        return this.firstNumber + this.secondNumber;
    };
    return sampleClass;
}());
exports.sampleClass = sampleClass;
