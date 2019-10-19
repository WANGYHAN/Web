import React, { Component } from "react";
import Header from "../../components/header";
import { DatePicker, List } from "antd-mobile";
import { newvote } from "../../api/index";
export default class Sponsor extends Component {
  state = {
    title: "",
    info: "",
    chooseList: [],
    addlist: "",
    isSingle: 0,
    anonymity: 0,
    date: ""
  };
  render() {
    let {
      title,
      info,
      addlist,
      isSingle,
      anonymity,
      chooseList,
      date
    } = this.state;
    return (
      <div className="votePage">
        <Header prev={true} title="发起投票" next="" />
        <ul>
          <li>
            <span>标题</span>{" "}
            <input
              type="text"
              value={title}
              name="title"
              onChange={this.handChange.bind(this)}
            />
          </li>
          <li>
            <span>描述</span>
            <textarea
              cols="35"
              rows="4"
              value={info}
              name="info"
              onChange={this.handChange.bind(this)}
            ></textarea>
          </li>
          <ol>
            {chooseList &&
              chooseList.map((item, index) => (
                <li key={index}>
                  <b>选项:{index + 1}</b>
                  &emsp; &emsp;
                  <span>{item}</span>
                  <b onClick={this.handDel.bind(this)}>-</b>
                </li>
              ))}
          </ol>
          <li>
            <span></span>
            <input
              type="text"
              value={addlist}
              name="addlist"
              onChange={this.handChange.bind(this)}
            />
            <span onClick={this.handAdd.bind(this)}>+</span>
          </li>
          <li>
            <span></span>
            <select
              value={isSingle}
              name="isSingle"
              onChange={this.handChange.bind(this)}
            >
              <option value="0">单选</option>
              <option value="1">多选</option>
            </select>
            <span></span> 请选择是否多选
          </li>
          <li>
            <span></span>
            <select
              value={anonymity}
              name="anonymity"
              onChange={this.handChange.bind(this)}
            >
              <option value="0">匿名</option>
              <option value="1">不匿名</option>
            </select>
            <span></span>请选择是否匿名
          </li>

          <DatePicker
            mode="date"
            title="Select Date"
            extra="Optional"
            value={date}
            onChange={date => this.setState({ date })}
          >
            <List.Item arrow="horizontal">Date</List.Item>
          </DatePicker>

          <li>
            <span></span>
            <button onClick={this.handClick.bind(this)}>发布</button>
          </li>
        </ul>
      </div>
    );
  }
  handChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({ [key]: val });
  }
  async handClick() {
    let {
      title,
      info,
      addlist,
      isSingle,
      anonymity,
      chooseList,
      date
    } = this.state;
    console.log(title, info, addlist, isSingle, anonymity);
    try {
      let res = await newvote({
        title,
        info,
        userId: window.localStorage.userId * 1,
        chooseList,
        anonymity: anonymity * 1,
        isSingle: isSingle * 1,
        startTime: new Date(),
        endTime: date
      });
      console.log(res);
      if (res.data.code == 1) {
        this.props.history.push("/Vote");
      }
    } catch (e) {
      console.log(e);
    }
  }
  handAdd() {
    let { addlist, chooseList } = this.state;
    chooseList.push(addlist);
    this.setState({
      chooseList
    });
  }
  handDel(ind) {
    let { chooseList } = this.state;
    chooseList.splice(ind, 1);
    this.setState({
      chooseList
    });
  }
}
