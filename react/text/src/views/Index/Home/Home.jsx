import React, { Component } from "react";
import { Carousel, WingBlank, Icon } from "antd-mobile";
export default class Home extends Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176,
    logo: [
      { icon: "ellipsis", txt: "沐恩动态" },
      { icon: "ellipsis", txt: "个人动态" },
      { icon: "ellipsis", txt: "代祷列表" },
      { icon: "ellipsis", txt: "小礼品" },
      { icon: "ellipsis", txt: "留言" },
      { icon: "ellipsis", txt: "奉献" },
      { icon: "ellipsis", txt: "投票" },
      { icon: "ellipsis", txt: "小组" }
    ]
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 100);

  }
  render() {
    let { logo } = this.state;
    return (
      <div>
        <div className="swiper">
          <WingBlank>
            <Carousel
              autoplay={false}
              infinite
              beforeChange={(from, to) =>
                console.log(`slide from ${from} to ${to}`)
              }
              afterChange={index => console.log("slide to", index)}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: this.state.imgHeight
                  }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: "100%", verticalAlign: "top" }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event("resize"));
                      this.setState({ imgHeight: "auto" });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </div>
        <div className="logo">
          {logo &&
            logo.map((item, index) => {
              return (
                <dl key={index} onClick={this.handClick.bind(this)}>
                  <dt>
                    <Icon type={item.icon} />
                  </dt>
                  <dd>{item.txt}</dd>
                </dl>
              );
            })}
        </div>
      </div>
    );
  }
  handClick() {
    this.props.history.push("/Vote");
  }
}
