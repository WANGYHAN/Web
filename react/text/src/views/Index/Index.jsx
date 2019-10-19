import React, { Component } from "react";
import isLogin from "../../utils/index";
import { NavLink } from "react-router-dom";
import Header from "../../components/header";

import RourterView from "../../router/routerView";
class Index extends Component {
  state = {
    list: [
      {
        name: "首页",
        link: "/Index/Home"
      },
      {
        name: "我的",
        link: "/Index/Mine"
      }
    ]
  };
  render() {
    let { list } = this.state;
    return (
      <div className="wrap">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <RourterView routes={this.props.children} />
        </div>
        <div className="footer">
          <ul>
            {list &&
              list.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.link}>{item.name}</NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default isLogin(Index);
