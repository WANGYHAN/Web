import React, { Component } from "react";
import Header from "../../components/header";
import RouterView from "../../router/routerView";
export default class Index extends Component {
  render() {
    return (
      <div className="nav">
        <Header />
        <RouterView routes={this.props.child} />
      </div>
    );
  }
}
