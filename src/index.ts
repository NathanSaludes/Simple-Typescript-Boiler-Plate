import { add, divide, multiply, substract, getRemainder } from "./sample_module";
import { sampleClass } from "./sample_class";

function start() {
   let x = 1;
   let y = 2;

   console.log(`${x} + ${y} = ${add(x,y)}`);
   console.log(`${x} - ${y} = ${substract(x,y)}`);
   console.log(`${x} * ${y} = ${multiply(x,y)}`);
   console.log(`${x} / ${y} = ${divide(x,y)}`);
   console.log(`${x} % ${y} = ${getRemainder(x,y)}`);

   let o1: sampleClass = new sampleClass(x,y);
   console.log('sample class method: ');   
   console.log(o1.sampleClassMethod());
}

start();