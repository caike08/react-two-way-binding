import React, { Component, Fragment } from "react";
import "./UserOutput.css";

class UserOutput extends Component {
  render() {
    const { username } = this.props;
    return (
      <Fragment>
        <p className="mainTitle">Hello, this is a Fragment!</p>
        {username && (
          <p className="complementaryText">
            If there is any username passed as <code>props</code>, it will be
            displayed here: <strong>{username}</strong>.
          </p>
        )}
        {!username && (
          <p className="complementaryText">
            Unfortunately, no <code>username</code> was passed 🙁
          </p>
        )}
      </Fragment>
    );
  }
}

export default UserOutput;
