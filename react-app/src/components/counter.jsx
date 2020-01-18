import React, { Component } from 'react';
//imrc then tab is a shorthand for the above line

//cc then tab is a shorthand for the below block
class Counter extends Component {
    // state = {
    //     value : this.props.value
    //   };

    //   constructor() {
    //       super();
    //       this.handleIncrement = this.handleIncrement.bind(this);
    //   }

    styles = {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold'
    }; 

    componentDidUpdate(prevProps, prevState){
        console.log("previous props", prevProps);
        console.log("previous State", prevState);
        if (prevProps.counter.value !== this.props.counter.value){
            //for example
            //do an ajax call and to get new data from the server
        }
    }

    componentWillUnmount() {
        console.log("Component - Unmount");
    }

    render() { 
        console.log("Counter - Rendered");
        return (<div>
                <div className="row">
                <div className="col-1">
                    <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                <button 
                    onClick={ () => this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm m-2">+</button>

                    <button 
                    onClick={ () => this.props.onDecrement(this.props.counter) }
                    className="btn btn-secondary btn-sm m-2" 
                    disabled={this.props.counter.value === 0? 'disabled' : ''}
                    >-</button>

                    <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">X</button>

                </div>
                </div>
                </div>);
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };

    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    };

}
 
export default Counter;