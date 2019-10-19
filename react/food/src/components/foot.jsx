import React, { Component } from "react";

export default class Food extends Component {
  state = {
    arr: ["常吃", "不吃", "偶尔", ""]
  };
  render() {
    console.log(this.props);
    let { item, handStar } = this.props;
    let { arr } = this.state;
    return (
      <div className="com">
        <dl>
          <dt>
            <img src="" alt="" />
          </dt>
          <dd>
            <div className="txt">
              <p>{item.name}</p>
              <span>
                {item.weight}千卡/{item.height}克
              </span>
            </div>
            <div className="toast">
              {item.check ? (
                <ul>
                  {arr &&
                    arr.map((item1, index1) => (
                      <li
                        key={index1}
                        onClick={this.handText.bind(this, index1, item.id)}
                      >
                        {item1}
                      </li>
                    ))}
                </ul>
              ) : null}
            </div>
            <div className="star">
              <span onClick={this.handStar.bind(this, item.id)}>⭐</span>
              <span>{arr[item.flag]}</span>
            </div>
          </dd>
        </dl>
      </div>
    );
  }
  handStar(id) {
    this.props.handStar(id);
    console.log(this.props.item.id);
  }
  handText(cur, id) {
    this.props.handText(cur, id);
  }
}
