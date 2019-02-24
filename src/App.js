import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super();
    //this.state = this.props.something;
    console.log("App - Constructor called ");
  }

  componentDidMount() {
    // ajax call
    console.log("app - mounted");
  }

  handleIncrement = counter => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("event handle delete is clicked", counterId);
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    //this.setState({ counters:this.state.counters.filter( obj => ) })
  };

  handleDecrement = counter => {
    if (counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleNavbar = () => {
    let totalItem = 0;
    for (let i = 0; i < this.state.counters.length; i++) {
      if (this.state.counters[i].value > 0) {
        totalItem += this.state.counters[i].value;
      }
    }
    return totalItem;
  };

  render() {
    console.log("app - rendered");
    return (
      <React.Fragment>
        <Navbar
          totalItems={this.handleNavbar()}
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
