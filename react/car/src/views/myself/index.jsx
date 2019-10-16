import React, { Component } from "react";
import isLogin from "../../utils/islogin";
class Myself extends Component {
  render() {
    return <div>我的</div>;
  }
}
export default isLogin(Myself);
