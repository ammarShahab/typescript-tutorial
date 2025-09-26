// first create a package.json file using npm init -y
//then install typescript using:
/*  1. for local install for specific project: npm install typescript --save-dev (from doc)
 2. for global install: npm install -g typescript (from doc) */
// then create a tsconfig.json file using npx tsc --init
//then from tsconfig.json file commented out "outDir": "./dist" and "rootDir": "./src"
// then install  npm i -D nodemon typescript ts-node (here -D is used for development purpose)
// then create a src folder and inside that create app.ts file
// then add "dev": "nodemon src/app.ts" in scripts of package.json file
// then run the app using npm run dev
// as it is in development mode to convert it to production mode go to package.json file and add "build": "tsc" in scripts
// then run tsc to convert it to production mode in javascript and it will create a dist folder with app.js file inside it

// or if u only want to run the js file after build then command in terminal "node dist/app.js"

// Note: if u update any data in ts file but not build it to js file then it will show the old data only in js file. So always build it after updating the ts file by using npm run build or tsc command.

// 1.
function greet(name: string): string {
  // specify the type of parameter and and after the parameter return the type
  return `Hello, ${name}!`;
}

console.log(greet("Arham"));
