import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from "./common/form";
import auth from "../services/authService";

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

    doSubmit = async () => {
        // call the server 
        try {
            const { data } = this.state;
            //JWT: JSON Web Token
            await auth.login(data.username, data.password); 

            //navigate the user to homepage after login
            window.location= "/";
            
        } catch (ex) {
            if(ex.response && ex.response.status === 400 ) {
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState( {errors} );
            }
        }
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