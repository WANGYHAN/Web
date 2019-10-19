import React, { Component } from "react";
import { register } from "../../api/index";
export default class Register extends Component {
  state = {
    newuser: "",
    sureuser: "",
    newpwd: "",
    surepwd: ""
  };
  render() {
    let { newuser, sureuser, newpwd, surepwd } = this.state;
    return (
      <>
        <div className="regPage">
          <input
            type="text"
            value={newuser}
            name="newuser"
            placeholder="请输入用户名"
            onChange={this.handChange.bind(this)}
          />
          <input
            type="text"
            value={sureuser}
            name="sureuser"
            placeholder="请确认用户名"
            onChange={this.handChange.bind(this)}
          />
          <input
            type="password"
            value={newpwd}
            name="newpwd"
            placeholder="请输入密码"
            onChange={this.handChange.bind(this)}
          />
          <input
            type="password"
            value={surepwd}
            name="surepwd"
            placeholder="请确认密码"
            onChange={this.handChange.bind(this)}
          />
          <button onClick={this.handClick.bind(this)}>注册</button>
        </div>
      </>
    );
  }
  handChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({ [key]: val });
  }
  async handClick() {
    let { newuser, sureuser, newpwd, surepwd } = this.state;
    if (newpwd == surepwd) {
      try {
        let res = await register({
          userName: newuser,
          realName: sureuser,
          password: newpwd
        });
        this.props.history.push("/Index");
        console.log("ok", res);
      } catch (e) {
        console.log(e.response);
      }
    } else {
      console.log("false");
    }
  }
}
