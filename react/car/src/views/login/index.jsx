import React, { Component } from "react";
import "../../mock/index";
// import axios from "axios";
// import ErrorWithStack from "jest-util/build/ErrorWithStack";
class Login extends Component {
  state = {
    name: "",
    pwd: ""
  };
  render() {
    let { name, pwd } = this.state;
    return (
      <div className="login">
        <input
          placeholder="Username"
          value={name}
          name="name"
          onChange={this.Changes.bind(this)}
        />

        <input
          type="password"
          placeholder="Password"
          value={pwd}
          name="pwd"
          onChange={this.Changes.bind(this)}
        />

        <button onClick={this.Submit.bind(this)}>登陆</button>
      </div>
    );
  }
  Changes(e) {
    let key = e.target.name;
    console.log(key, e.target.value);
    this.setState({ [key]: e.target.value });
  }
  Submit() {
    let { name, pwd } = this.state;
    console.log(name, pwd);
    window.localStorage.user = name;
    this.props.history.go(-1);
    fetch("/api/login")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
      });
    // axios.post("/api/login").then(res => {
    //   console.log(res);
    //   if (res.data.code == 1) {
    // window.localStorage.user = name;
    //   this.props.history.go(-1);
    //   }
    // });
  }
}

export default Login;
