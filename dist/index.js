"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operations_1 = require("./operations");
var index2_1 = require("./index2");
function start() {
    var x = 1;
    var y = 2;
    console.log(x + " + " + y + " = " + operations_1.add(x, y));
    console.log(x + " - " + y + " = " + operations_1.substract(x, y));
    console.log(x + " * " + y + " = " + operations_1.multiply(x, y));
    console.log(x + " / " + y + " = " + operations_1.divide(x, y));
    console.log(x + " % " + y + " = " + operations_1.getRemainder(x, y));
    var o1 = new index2_1.sampleClass(x, y);
    console.log('sample class method: ');
    console.log(o1.sampleClassMethod());
}
start();
