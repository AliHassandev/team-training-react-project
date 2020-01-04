import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters : [
            {id : 1, value: 4},
            {id : 2, value: 0},
            {id : 3, value: 0},
            {id : 4, value: 0},
        ]
     };
     
     handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
     };

     handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
     };

    render() { 
        return ( <div>
            {this.state.counters.map(counter => 
            <Counter 
            key={counter.id} 
            // value={counter.value} 
            // id={counter.id} 
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
             />
            )}
        </div> );
    }
}
 
export default Counters;