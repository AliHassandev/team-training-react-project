import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from "./common/form";
import { login } from "../services/authService";

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
            const { data: jwt } = await login(data.username, data.password); 
            //store jwt to locatStorage
            localStorage.setItem('token', jwt);
            //navigate the user to homepage after login
            this.props.history.push('/');
            
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