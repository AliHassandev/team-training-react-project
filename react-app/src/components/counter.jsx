import React, { Component } from 'react';
//imrc then tab is a shorthand for the above line

//cc then tab is a shorthand for the below block
class Counter extends Component {
    state = {
        count : 5
      }
    render() { 
        return (<div>
                    <h1>Hello World</h1>
                    <span>{this.formatCount()}</span>
                    <button>Increment</button>
                </div>);
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;