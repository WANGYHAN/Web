import React, { Component } from "react";
import axios from "axios";
import "../../../mock/index";
export default class Home extends Component {
  state = {
    list: []
  };
  render() {
    let { list } = this.state;
    return (
      <div className="home">
        {list &&
          list.map((item, index) => (
            <dl key={index} onClick={this.handClick.bind(this, item.type)}>
              <dt></dt>
              <dd>{item.name}</dd>
            </dl>
          ))}
      </div>
    );
  }
  async componentDidMount() {
    let res = await axios.get("/api/data");
    this.setState({ list: res.data });
  }
  handClick(type) {
    this.props.history.push("/class/" + type);
  }
}
