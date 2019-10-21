import React, { Component } from "react";
import axios from "axios";
import "../../../mock/index";
import { Reference } from "react-popper";
export default class Floor extends Component {
  state = {
    list: {}
  };
  render() {
    
    let { list } = this.state;
    return (
      <div>
        {Object.keys(list).map((item, index) => (
          <div ref={"title_" + item} className="list" key={index}>
            <h3>{item}</h3>
            <ul>
              {list[item] &&
                list[item].map((txt, idx) => (
                  <li key={idx}>
                    <img src={txt.CoverPhoto} />
                    <span>{txt.Name}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
        <ol className="letter">
          {Object.keys(list).map((item, index) => (
            <li key={index} onClick={this.Scroll.bind(this, item)}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    );
  }
  async componentDidMount() {
    let res = await axios.get("/api/city");
    this.setState({ list: res.data });
    console.log(res.data)
  }
  Scroll(key) {
    document.documentElement.scrollTop =
      this.refs["title_" + key].offsetTop - 44;
  }
}
