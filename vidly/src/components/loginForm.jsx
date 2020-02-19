import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input'
class LoginForm extends Component {

    state = {
        //we cant use null or undefined with controled input, it should be empty string or a value we get from the server
        account: {
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

    validate = () => {
        const options = { abortEarly: false };
        const result = Joi.validate(this.state.account, this.schema, options);
        console.log(result);
        if(!result.error) return null;
        
        const errors = {};
        for (let item of result.error.details)
           errors[item.path[0]] = item.message;
        return errors;
        };

    validateProperty = ({ name, value }) => {
        if(name === 'username'){
            if(value.trim() === '') return 'Username is required';
            //....
        }
        if(name === 'password'){
            if(value.trim() === '') return 'Password is required';
            //....
        }
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        //errors should be always an object, it shouldn't be null
        this.setState( { errors: errors || {} } );
        if(errors) return;
        // call the server 
        console.log("Submitted");
    };

    handleChaneg = ( { currentTarget: input } ) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState( {account, errors} );
    };

    
    render() { 
        const { account, errors } = this.state;

        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input 
                    name="username"
                    value={account.username}
                    label="Username"
                    onChange={this.handleChaneg}
                    error={errors.username}
                />
                <Input 
                    name="password"
                    value={account.password}
                    label="Password"
                    onChange={this.handleChaneg}
                    error={errors.password}
                />
                <button className="btn btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;