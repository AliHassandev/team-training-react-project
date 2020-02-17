import React, { Component } from 'react';

class LoginForm extends Component {

    //dont over use Ref, only when it's necessary 
    // username = React.createRef();

    // componentDidMount() {
    //     this.username.current.focus();
    // };
    state = {
        account: {
            username:'',
            password:''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        // call the server 
        console.log("Submitted");
        // const username = this.username.current.val();
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
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                    autoFocus
                    // ref={this.username}
                    value={account.username}
                    onChange={this.handleChaneg}
                    name="username"
                    id="username" 
                    type="text" 
                    className="form-control"
                    />
                    </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    value={account.password}
                    onChange={this.handleChaneg}
                    name="password"
                    id="password" 
                    type="text" 
                    className="form-control"
                    />
                    </div>
                    <button className="btn btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;