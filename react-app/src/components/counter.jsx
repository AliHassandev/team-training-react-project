import React, { Component } from 'react';
//imrc then tab is a shorthand for the above line

//cc then tab is a shorthand for the below block
class Counter extends Component {
    state = {
        count : 0,
        tags: ["tag1", "tag2", "tag3"]
      };

    //   constructor() {
    //       super();
    //       this.handleIncrement = this.handleIncrement.bind(this);
    //   }

    styles = {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold'
    }; 
    render() { 
        return (<div>
                    <h1 style={{ fontSize:33, fontWeight: 'bold', color:'red' }}>Hello World</h1>
                    <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button 
                    onClick={ () => this.handleIncrement({id : 1}) }
                    className="btn btn-secondary">Increment</button>

            { (this.state.tags.length === 0 && <p>Please add tags</p>)}
            {this.renderTagsList()}

                </div>);
    }

    handleIncrement = product => {
        console.log(product);
        //change the state 
        this.setState( { count: this.state.count + 1 } );
    };

    renderTagsList(){
        if(this.state.tags.length === 0) return <p>There is no tags!</p>;

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>;
    };

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    };

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    };

}
 
export default Counter;