import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from "./common/form";

class LoginForm extends Form {

    state = {
        //we cant use null or undefined with controled input, it should be empty string or a value we get from the server
        data: {
            username:'',
            password:''
        },
        errors: {

        }
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = () => {
        // call the server 
        console.log("Submitted");
    };
    
    render() { 
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
                {this.renderInput("password", "Password", "password")}

                {this.renderButton("login")}
            </form>
        </div> );
    }
}
 
export default LoginForm;