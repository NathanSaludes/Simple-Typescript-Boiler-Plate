export class sampleClass {
   private firstNumber: number;
   private secondNumber: number;

   /**
    * @param x - refers to the first number
    * @param y - refers to the second number
    */
   constructor(x: number, y: number) {
      this.firstNumber = x;
      this.secondNumber = y;
   }

   /**
   * Comments about the class method. helpful for documenting code
   * @returns the sum of the first and second number
   */
   public sampleClassMethod(): number {
      return this.firstNumber + this.secondNumber;
   }
   
}