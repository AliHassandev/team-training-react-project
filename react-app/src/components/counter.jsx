import React, { Component } from 'react';
//imrc then tab is a shorthand for the above line

//cc then tab is a shorthand for the below block
class Counter extends Component {
    state = {
        count : 0
      };

    styles = {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold'
    }; 
    render() { 
        return (<div>
                    <h1 style={{ fontSize:33, fontWeight: 'bold', color:'red' }}>Hello World</h1>
                    <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button className="btn btn-secondary">Increment</button>
                </div>);
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}
 
export default Counter;