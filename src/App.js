import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  //constructor render componentDidMount
  ///test
  constructor(props) {
    super(props);
    console.log("hh");
  }
  state = {
    isLoading: true,
    movies: [],
  };

  // https://yts-proxy.now.sh/list_movies.json

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  } // 랜더 된 후
  componentDidUpdate() {} // 다시 랜더 된 후
  componentWillUnmount() {} //랜더가 종료 된 후

  render() {
    const { isLoading } = this.state; // es6 isLoading = this.state.isLoading 이거랑 같음
    return <div>{isLoading ? "Loading" : "im ready"}</div>;
  }
}
export default App;
