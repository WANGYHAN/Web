import React, { Component } from "react";

export default class Index extends Component {
  render() {
    return (
      <div className="App">
        <p></p>
        <button onClick={this.handClick.bind(this)}>点击跳转</button>
      </div>
    );
  }
  handClick() {
    this.props.history.push("/province");
  }
}
