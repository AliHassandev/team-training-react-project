import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {

    constructor(props) {
        super(props);
        console.log("Hello Constructor", this.props);
    }

    componentDidMount() {
        //best place for ajax cole
        console.log("App Mounted");
    }

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

     handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
     };

    render() { 
        console.log("App - Rendered");
        return ( 
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <div className="container">
                    <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete} 
                    />
                </div>
            </React.Fragment>
         );
    }
}
 
export default App;