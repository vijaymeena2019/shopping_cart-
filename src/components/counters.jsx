import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // also work with class Counters extends Component {

  render() {
    console.log("counters rendered");
    const {
      onDelete,
      onIncrement,
      counters,
      onDecrement,
      onReset
    } = this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-sm btn-primary m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            onIncrement={onIncrement}
            key={counter.id}
            value={counter.value}
            counter={counter}
            // id={counter.id}
            // selected={true}
            onDelete={onDelete}
            onDecrement={onDecrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
