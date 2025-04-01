import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handelDescrement = this.handelDescrement.bind(this);
    this.handelIncrement = this.handelIncrement.bind(this);
  }

  handelDescrement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handelIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const data = new Date("june 21 2027");
    data.setDate(data.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handelDescrement}>-</button>
        <span>
          {data.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handelIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
