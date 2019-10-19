import React, { Component } from "react";
import axios from "axios";
import "../../mock/index";
import Food from "../../components/foot";
import { connect } from "react-redux";
import { ADD_LIST } from "../../store/types";
class Class extends Component {
  state = {
    list: [],
    newlist: []
  };
  render() {
    let { newlist } = this.state;
    return (
      <div>
        {newlist &&
          newlist.map((item, index) => (
            <Food
              key={index}
              item={item}
              handStar={this.handStar.bind(this, item.id)}
              handText={this.handText.bind(this, index, item.id)}
            />
          ))}
      </div>
    );
  }
  async componentDidMount() {
    let res = await axios.get("/api/list");
    console.log(res);

    let newlist = res.data.filter(
      item => item.type == this.props.match.params.type
    );
    this.setState({ list: res.data, newlist });
    console.log(newlist);
  }
  handStar(id) {
    let { list } = this.state;
    let index = list.findIndex(item => item.id == id);
    list[index].check = !list[index].check;
    this.setState({ list });
  }
  handText(cur, id) {
    console.log(cur, id);
    let { list } = this.state;
    let index = list.findIndex(item => item.id == id);
    list[index].flag = cur;
    list[index].check = false;
    this.setState({ list });
  }
}
export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      addList(obj) {
        dispatch({
          type: ADD_LIST,
          obj
        });
      }
    };
  }
)(Class);
