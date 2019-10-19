import React, { Component } from "react";
import { login } from "../../api/index";
class Login extends Component {
  state = {
    user: "",
    pwd: "",
    show: false
  };
  render() {
    let { user, pwd, show } = this.state;
    return (
      <div className="loginPage">
        <h3>欢迎来到沫恩之家</h3>
        <input
          type="text"
          value={user}
          name="user"
          placeholder="请输入用户名"
          onChange={this.handChange.bind(this)}
        />
        <input
          type="password"
          value={pwd}
          name="pwd"
          placeholder="请输入密码"
          onChange={this.handChange.bind(this)}
        />
        <span
          onClick={this.handClickSpan.bind(this)}
          className={show ? "" : "active"}
        >
          注册
        </span>
        <button onClick={this.handClick.bind(this)}>登陆</button>
      </div>
    );
  }
  handChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({ [key]: val });
  }
  async handClick() {
    let { user, pwd } = this.state;
    let res = await login({ userName: user, password: pwd });
    console.log(res);
    if (res.data.code === 1) {
      console.log(this.props);
      window.localStorage.token = res.data.token;
      window.localStorage.userId = res.data.userId;
      this.props.history.go(-1);
    } else {
      console.log(res);
      this.setState({ show: true });
    }
  }
  handClickSpan() {
    this.props.history.push("/Register");
  }
}
export default Login;
