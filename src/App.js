import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  //constructor render componentDidMount

  constructor(props) {
    super(props);
    console.log("hellow");
  }
  state = {
    count: 0,
  };
  // 리액트는 render를 리프레시 하지 않는다.
  //setstate가 새로운 state와 render function을 호출함
  // state를 바꿀려면 setstate 사용
  add = () => {
    //이렇게 사용하는거 추천하지 않음 멋지지 않음
    // this.setState({ count: this.state.count + 1 });
    this.setState((state) => ({ count: state.count + 1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {} // 랜더 된 후
  componentDidUpdate() {} // 다시 랜더 된 후
  componentWillUnmount() {} //랜더가 종료 된 후

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
