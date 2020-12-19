import React, { Component } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";
import reactLogo from "./assets/img/react.svg"
import "./App.css";

const DEFAULT_USERNAME = "reactUser2020";
const DEFAULT_BORDER_STYLE = { borderColor: "#333" };

class App extends Component {
  state = {
    userName: DEFAULT_USERNAME,
  };

  usernameHandler = (event) => {
    this.setState({ userName: event.target.value });
  };

  render() {
    const { userName } = this.state;

    return (
      <div className="App">
        <img alt='React Logo' src={reactLogo} className='logo'  />

        <UserInput changed={this.usernameHandler} defaultUsername={userName} />

        <span className="separator" style={DEFAULT_BORDER_STYLE} />

        <UserOutput />
        <UserOutput />
        <UserOutput username={userName} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
