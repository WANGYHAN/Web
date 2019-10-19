import React, { Component } from "react";
import Routerview from "../../router/routerview";
import { NavLink } from "react-router-dom";

export default class Index extends Component {
  state = {
    tab: ["首页", "排行榜", "我的"]
  };
  render() {
    return (
      <div className="wrap">
        <Routerview routes={this.props.children} />
        <ul>
          <NavLink to="/index/home">首页</NavLink>
          <NavLink to="/index/rank">排行榜</NavLink>
          <NavLink to="/index/mine">我的</NavLink>
        </ul>
      </div>
    );
  }
}
