import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello Team</h1>;
console.log(element);

ReactDOM.render(element, document.getElementById("root"));

const person = {
    name: "Alosh",
    walk(){
        console.log(this);
    },
}

person.walk();

// using bind to assign this
const person2 = person.walk.bind(person);
person2();
// =========
// Arrow Function
// =========

// const square = function(number) {
//     return number * number;
// }
const square = number => number * number;
console.log(square(5));

// using arrow function with filter method
const jobs = [
    { id: 1, isActive : true },
    { id: 2, isActive : true },
    { id: 3, isActive : false }
]
const activeJobs = jobs.filter(jobs => jobs.isActive);
console.log(activeJobs);
// arrow function don't rebind this keyword 

// =========
// Array.map
// =========
const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);