import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    // if (prevProps.counter.value !== this.props.counter.value) {
    //   // ajax call and get new data from server
    // }
  }

  componentWillUnmount() {
    console.log("counter - unmount");
  }
  showCount = () => {
    let { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  };

  handleClasses = () => {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "primary" : "warning");
  };

  render() {
    console.log("counter rendered");
    return (
      <div>
        <span className={this.handleClasses()}>{this.showCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
