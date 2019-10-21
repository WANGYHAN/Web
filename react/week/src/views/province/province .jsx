import React, { Component } from "react";

export default class Province extends Component {
  state = {
    list: [],
    flag: false
  };
  render() {
    let { list, flag } = this.state;
    // console.log(list);
    return (
      <>
        <div className="province">
          {list &&
            list.map((item, index) => {
              return (
                <li key={index} onClick={this.handScroll.bind(this)}>
                  {item.CityName}
                </li>
              );
            })}
        </div>
        <div className={flag ? "" : "mask"}>
          <div className={flag ? "" : "trans"}></div>
        </div>
      </>
    );
  }
  componentDidMount() {
    fetch("http://baojia.chelun.com/v1-city-alllist.html?provinceid=")
      .then(res => {
        return res.json();
      })
      .then(res => {
        // console.log(res);
        this.setState({ list: res.data });
      });
  }
  handScroll() {
    let { flag } = this.state;
    this.setState({ flag: !flag });
    this.setState({ flag });
    console.log(flag)
  }
}
