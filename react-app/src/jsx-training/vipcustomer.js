import {Customer} from './customer';
// Inheritance

//import types
// default -> import ... from '...';
// named   -> import { ... } from '...';

export function callBack() { };

export default class VipCustomer extends Customer {
    constructor(name, industry){
        super(name);
        this.industry = industry;
    }

    bookAppointment(){
        console.log(`call ${this.name} to book an appointment, the client industry is ${this.industry}`);
    }
}