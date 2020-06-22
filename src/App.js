import React from "react";
import PropTypes from "prop-types";

//State
class App extends React.Component {
  //바꿀 데이터를 state 안에 넣자
  state = {
    count: 0,
  };
  // 리액트는 render를 리프레시 하지 않는다.
  //setstate가 새로운 state와 render function을 호출함
  // state를 바꿀려면 setstate 사용
  add = () => {
    //이렇게 사용하는거 추천하지 않음 멋지지 않음
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>The num is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
