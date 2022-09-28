const fruits: string[] = ["apple"]
//fruits.push(7);
fruits.push("orange");

const vegies: readonly string[] = ["carrot"]
//vegies.push("cucumber")


const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4);
//numbers.push("2");

let tuple: [number, string, boolean] = [2, "2", true];
tuple[2] = false;
//tuple[1] = 2;

//interface
interface Rectangle {
    height: number,
    width: number
}

interface RecWithColor extends Rectangle {
    color: string
}

const recWColor: RecWithColor = {
    height: 20,
    width: 10,
    color: "red"
};


function add(num1: number, num2: number): number {
    return num1 + num2;
}

function print(): void {
    console.log('Hello!');
}

function addWithOptional(a: number, b: number, c?: number) { //optional = ?
    return a + b + (c || 0);
}

function pow(value: number, exponent: number = 2) { //default 2
    return value ** exponent;
}