// 1-vazifa
// 1. Oson
let ism: string = "Mr";
// 2. Medium
function greet(ism: string): string {
    return `Hello, ${ism}`;
}

console.log(greet("Mr"));
// 3. O‘rtacha qiyin
function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

console.log(capitalize("hello"));

// 2-vazifa
// 1. Oson
let age: number = 14;

// 2. Medium
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(5, 10));

// 3. O‘rtacha qiyin
function isEven(n: number): boolean {
    return n % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

// 3-vazifa

// 1. Oson
let isOnline: boolean = true;

// 2. Medium
function isAdult(age: number): boolean {
    return age >= 18;
}

console.log(isAdult(20));

// 3. O‘rtacha qiyin
function canLogin(isAdmin: boolean, isActive: boolean): boolean {
    return isAdmin && isActive;
}

console.log(canLogin(true, true));

// 4-vazifa
// 1. Oson
let numbers: number[] = [1, 2, 3, 4];

// 2. Medium
function getFirst(arr: string[]): string {
    return arr[0];
}
console.log(getFirst(["apple", "banana", "cherry"]));

// 3. O‘rtacha qiyin
function sumArray(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

// 5-vazifa
// 1. Oson
let user = {
    name: "Mr",
    age: 14,
};

// 2. Medium
function printUser(user: { name: string; age: number }): void {
    console.log(`${user.name} is ${user.age} years old`);
}
printUser({ name: "Mr", age: 14 });

// 3. O‘rtacha qiyin
function isAdultUser(user: { name: string; age: number }): boolean {
    return user.age >= 18;
}
console.log(isAdultUser({ name: "Mr", age: 20 }));

// 6-vazifa
// 1. Oson
let data: any = "hello";
data = 123;
data = [1, 2, 3];

// 2. Medium
function printData(data: any): void {
    console.log(data);
}
printData("Hello");

// 3. O‘rtacha qiyin
let unsafe: any = "text";
unsafe = 10;
unsafe = ["danger", "any"];

// 7-vazifa
// 1. Oson
let value: unknown = "Hello World";

// 2. Medium
if (typeof value === "string") {
    console.log(value.length);
}

console.log("Hello");

// 3. O‘rtacha qiyin
function isNumber(value: unknown): boolean {
    return typeof value === "number";
}

console.log(isNumber(10));

// 8-vazifa
// 1. Oson
function logMessage(msg: string): void {
    console.log(msg);
}

logMessage("Hello!");

// 2. Medium
function printSum(a: number, b: number): void {
    console.log(a + b);
}

printSum(5, 10);

// 3. O‘rtacha qiyin
function Nothing(): void { }
let result = Nothing();
console.log(result);
// undifined chiqadi

// 9-vazifa
// 1. Oson
function throwError(message: string): never {
    throw new Error(message);
}


// 2. Medium
function infiniteLoop(): never {
    while (true) { }
}
// infiniteLoop()ni log qilmaslik kerak chunki qotib qoladi;


// 3. O‘rtacha qiyin
function checkType(x: string | number): string {
    switch (typeof x) {
        case "string":
            return "string";
        case "number":
            return "number";
        default:
            const neverValue: never = x;
            return neverValue;
    }
}
console.log(checkType("hello"));
console.log(checkType(42)); 
// console.log(checkType(true));
// bunda x xato beradi




