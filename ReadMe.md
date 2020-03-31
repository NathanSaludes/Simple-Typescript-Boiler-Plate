# How To Setup Typescript For Your Project
1. Install the following dependencies (click packages for more info):
   - [`ts-node`](https://www.npmjs.com/package/ts-node)
   - [`typescript`](https://www.npmjs.com/package/typescript)
   - [`nodemon`](https://www.npmjs.com/package/nodemon)
  
2. Enter `tsc --init` on your terminal to initialize your project directory with a typescript configuration file.

3. Create your own scripts for executing the following tasks:
   - *Watch all your `.ts` files using `nodemon`*
   - *Build/Compile all your `.ts` files*
   - *A script to the start application*

	*sample `package.json` "scripts"*
	```json
	"scripts": {
      "dev": "nodemon ./src/index.ts",
      "build": "tsc",
      "start": "node ./dist/index.js"
   }
	```

	> NOTE: in my example, I configured typescript using the `tsconfig.json` file to put all the built files in a folder called `dist`.