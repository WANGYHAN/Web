import React, { Component } from "react";

export default class Frunt extends Component {
  state = {
    flag: false,
    count: 0
  };
  render() {
    let { count, flag } = this.state;
    return (
      <div className="spans">
        <span onClick={this.handDel.bind(this)}>{flag ? "-" : ""}</span>
        <span>{flag ? count : ""}</span>
        <span onClick={this.handAdd.bind(this)}>+</span>
        <span>10</span>
        <span>{flag ? count * 10 : ""}</span>
      </div>
    );
  }
  handAdd() {
    let { count } = this.state;
    this.setState({ flag: true, count: count + 1 });
  }
  handDel() {
    let { count } = this.state;
    this.setState({ count: count - 1 });
    if (count <= 1) {
      this.setState({ flag: false });
    }
  }
}
