"use strict";
// npm i -g typescript
// tsc sandbox.tsb -w
// tsc --init
// tsc
// const character = "luigi";
// console.log(character);
// const inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach((input) => console.log(input));
// TYPE BASICS
// let character = "luigi";
// let age = 30;
// let isBlackBelt = false;
// // character = 30;
// character = "mario";
// // age = 'yoshi'
// age = 40;
// // isBlackBelt = 'yes';
// isBlackBelt = true;
// const circ = (diameter: number) => diameter * Math.PI;
// // console.log(circ("hello"));
// console.log(circ(7.5));
// OBJECTS & ARRAYS
// arrays
// let names = ["luigi", "mario", "yoshi"];
// // names = 'hello'
// // names.push(3)
// // names[0] = 3;
// names.push("toad");
// let numbers = [10, 20, 30, 40];
// // numbers.push('luigi')
// // numbers[1] = "shaun"
// numbers.push(25);
// let mixed = ["ken", 5, "chun-li", 8, 9];
// mixed.push("ryu");
// mixed.push(10);
// mixed[0] = 3;
// // objects
// let ninja = { name: "mario", belt: "black", age: 30 };
// // ninja.age = '30';
// // ninja.skills = ['fighting', 'sneaking'];
// ninja = {
//   name: "yoshi",
//   belt: "orange",
//   age: 40,
// };
// ninja.name = "ryu";
// ninja.age = 30;
// EXPLICIT TYPES
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// // age = 'luigi';
// age = 30;
// // isLoggedIn = 25;
// isLoggedIn = true;
// // arrays
// let ninjas: string[] = [];
// ninjas.push("shaun");
// ninjas = ["yoshi", "mario"];
// // union types
// let mixed: (string | number | boolean)[] = [];
// mixed.push(false);
// mixed.push(20);
// mixed.push("hello");
// let uid: string | number;
// // uid = false
// uid = "123";
// uid = 123;
// // objects
// let ninjaOne: object;
// ninjaOne = { name: "yoshi", age: 30 };
// let ninjaTwo: {
//   name: string;
//   age: number;
//   belt: string;
// };
// ninjaTwo = {
//   name: "mario",
//   belt: "black",
//   age: 20,
// };
// DYNAMIC (ANY) TYPES
// unkown and never are more appropriate
// https://mariusschulz.com/blog/the-unknown-type-in-typescript
// The unknown type is only assignable to the any type and the unknown type itself.
// https://www.tutorialsteacher.com/typescript/typescript-never
// let age: any = 25;
// age = true;
// age = "hello";
// age = { name: "luigi" };
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push("mario");
// mixed.push(false);
// let ninja: { name: any; age: any };
// ninja = { name: "yoshi", age: 25 };
console.log("test");