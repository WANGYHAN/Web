import React, { Component } from "react";
import { add } from "../../../api/index";
export default class Mine extends Component {
  state = {
    list: []
  };
  render() {
    let { list } = this.state;
    return (
      <div className="overauto">
        <ul>
          {list &&
            list.map((item, index) => (
              <li key={index}>
                <img src={item.groupIcon} alt="" />
                <span>{item.leaderUserName}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
  async componentDidMount() {
    let res = await add({});
    console.log(res.data.result);
    this.setState({ list: res.data.result });
  }
}
