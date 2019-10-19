import React, { Component } from "react";
import { allVote } from "../../api/index";
import Header from "../../components/header";
export default class Vote extends Component {
  state = {
    list: [],
    txt: ["全部", "已结束", "正在进行"],
    flag: false,
    ind: 0,
    isSingle: 0,
    newlist:[]
  };
  render() {
    let { txt, list, ind, newlist} = this.state;
    return (
      <div>
        <div>
          <Header prev={true} next="发起投票" />
        </div>
        <div className="tab">
          <ul>
            {txt.map((item, index) => (
              <li
                key={index}
                className={ind == index ? "active" : ""}
                onClick={this.handClick.bind(this, index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="cont">
          {newlist &&
            newlist.map((item, index) => (
              <dl key={index}>
                <dd></dd>
                <dt>
                  <div className="centerItem">
                    <div className="centerItemTitle">{item.title}</div>
                    <div className="centerItemItem">详情</div>
                  </div>
                  <div className="rightItem">
                    <div className="rightItemTitle">{item.endTime}</div>
                    <div className="rightItemItem">
                      {item.isSingle ? "单选" : "多选"}
                    </div>
                  </div>
                </dt>
              </dl>
            ))}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let res = await allVote();
    console.log(res.data);
    this.setState({ list: res.data ,newlist:res.data});
  }
  handClick(ind) {
    let {list,newlist}=this.state
    this.setState({ ind });
    let timer=new Date().getTime()
    console.log(timer)
    newlist=ind==0?list:list.filter(item=>{
      return ind == 1 ? timer > new Date(item.endTime) : timer < new Date(item.endTime)
    })
    console.log(newlist)
    this.setState({newlist})
  }
}
