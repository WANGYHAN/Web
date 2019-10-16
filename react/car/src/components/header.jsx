import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "antd-mobile";
class Header extends Component {
  state = {
    list: [
      { name: "首页", link: "/index/home" },
      { name: "找车", link: "/index/floor" },
      { name: "论坛", link: "/index/frunt" },
      { name: "二手车", link: "/index/lower" },
      { name: "服务", link: "/index/save" }
    ],
    flag: false
  };
  render() {
    let { list, flag } = this.state;
    return (
      <>
        <div className="header">
          <div className="carHome">汽车之家</div>
          <div>
            <input type="text" />
            <NavLink to="/search">
              <Icon type="search" className="search" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/myself">我的</NavLink>
          </div>
        </div>
        <div className="title">
          <ul>
            {list &&
              list.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={item.link}>{item.name}</NavLink>
                  </li>
                );
              })}
          </ul>
          <div className="upDad">
            <Icon type="up" className={flag ? "active" : ""} onClick={() => {this.setState({ flag: !flag }) }}/>
          </div>
        </div>
        <div className={flag ? "mark" : "null"} onClick={() => this.setState({ flag: false })}>
          <div className="hidden">
            <li></li>
            <li></li>
            <li></li>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
