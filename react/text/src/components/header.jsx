import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
  static defaultProps = {
    prev: false,
    title: "沐恩",
    next: ">"
  };
  render() {
    let { prev, title, next } = this.props;
    return (
      <div className="header">
        {prev ? <span>&lt;</span> : null}
        <h3>{title}</h3>
        <span onClick={this.handClick.bind(this)}>{next}</span>
      </div>
    );
  }
  handClick() {
    this.props.history.push("/Sponsor");
  }
}

export default withRouter(Header);
