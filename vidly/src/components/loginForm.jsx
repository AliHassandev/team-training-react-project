import React, { Component } from 'react';
import Input from './common/input'
class LoginForm extends Component {

    state = {
        //we cant use null or undefined with controled input, it should be empty string or a value we get from the server
        account: {
            username:'',
            password:''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        // call the server 
        console.log("Submitted");
    };

    handleChaneg = ( { currentTarget: input } ) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState( {account} );
    };

    
    render() { 
        const { account } = this.state;

        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input 
                    name="username"
                    value={account.username}
                    label="Username"
                    onChange={this.handleChaneg}
                />
                <Input 
                    name="password"
                    value={account.password}
                    label="Password"
                    onChange={this.handleChaneg}
                />
                <button className="btn btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;