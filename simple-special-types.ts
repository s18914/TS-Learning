let fruitName: string = "orange";
//fruitName = 3;
fruitName = "apple";

let fruit2: string | number = fruitName;
fruit2 = 5;

console.log(fruit2)

// JSON
const json = JSON.parse("55");
console.log(typeof json);

//special
let s: any = 10;
s = '10';

let n: never;
//let n: never = 4;

let y: undefined = undefined;
let z: null = null;
