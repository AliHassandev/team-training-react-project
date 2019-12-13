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
];
const activeJobs = jobs.filter(jobs => jobs.isActive);
console.log(activeJobs);
// arrow function don't rebind this keyword 

// =========
// Array.map
// =========
const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

// =========
// Object Destructuring
// =========
const address = {
    street : "",
    city   : "",
    country: ""
};
//const street    = address.street;
//const city      = address.city;
//const country   = address.country;

const {street, city, country} = address;
// or we can use an alias to use another name to the variable 
const {street: st} = address; // the variable name now is st

// =========
// Spread Operator
// =========
const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);
// const combined = [...first, ...second];
// const combined = [...first,'a', ...second, 'b']; we can use it to add values in between
// and we can use it to clone and aaray 
const cloned = [...first] // to clone the first array
// we can also apply spread operator on objects 

const firstObject = {name : "Alosh"};
const secondObject = {job: "Developer"};

const combinedObject = {...firstObject, ...secondObject, location: 'LB'};

const clonedObject = {...firstObject};
console.log(combinedObject);

// =========
// Classes
// =========
// the benefits of using Classes
class Customer  {
    constructor (name) {
        this.name = name;
    }

    call() {
        console.log("call");
    }
}

const customer01 = new Customer("Alosh");
console.log(customer01.name);

// Inheritance
class VipCustomer extends Customer {
    constructor(name, industry){
        super(name);
        this.industry = industry;
    }

    bookAppointment(){
        console.log(`call ${this.name} to book an appointment, the client industry is ${this.industry}`);
    }
}

const majd = new VipCustomer("majd", "fintech");

majd.bookAppointment();