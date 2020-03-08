import React, { Component, Fragment } from "react";
import axios from "axios";
import "./style.css";
import XiaojiejieItem from "./XiaojiejieItem";
import Boss from "./Boss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Xiaojiejie extends Component {
  // 在某一时刻， 可以自动执行的函数
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["基础按摩", "精油推背"]
    };
  }

  componentDidMount() {
    axios
      .get("https://juejin.im/post/5e626c07f265da5749475408")
      .then(res => {
        console.log("axios 获取数据成功:" + JSON.stringify(res));
      })
      .catch(error => {
        console.log("axios 获取数据失败:" + error);
      });
    this.setState({
      // list:res.data.data
    });
  }

  //   componentWillMount() {
  //       console.log('componentwillMount ----组件要挂载到页面的时刻')
  //   }

  //   componentDidMount() {
  //     console.log('componentwillMount ----组件要挂载到页面的时刻')
  //   }

  //   shouldComponentUpdate() {
  //       console.log('1-sholdComponentUpdate')
  //       return true
  //   }

  //   componentWillUpdate() {
  //       console.log('2-componentWillUpdate')

  //   }

  //   componentDidUpdate() {
  //       console.log('4-componentDidUpdate')
  //   }

  //   componentWillReceiveProps() {
  //       console.log('RRRRRRRRR')
  //   }

  render() {
    //   console.log('3-render----组件挂载中')
    return (
      <Fragment>
        {/*第一次写注释 */}
        <div>
          <label htmlFor="jspang">增加服务:</label>
          <input
            id="jspang"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={input => {
              this.input = input;
            }}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={ul => (this.ul = ul)}>
          <TransitionGroup>
            {this.state.list.map((item, index) => {
              return (
                  <CSSTransition
                    timeout={2000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index+item}
                  >
                         {/* <li 
                            key={index+item}
                            onClick = {this.deleteItem.bind(this,index)}
                            dangerouslySetInnerHTML={{__html:item}}
                            >
                                {item}
                                </li> */}
                        

                <XiaojiejieItem
                  // avname = '菠萝'
                  key={index + item}
                  content={item}
                  index={index}
                  list={this.state.list}
                  deleteItem={this.deleteItem.bind(this)}
                /></CSSTransition>
                
              );
            })}
          </TransitionGroup>
        </ul>

        <Boss />
      </Fragment>
    );
  }

  inputChange() {
    //   console.log(this)
    //   this.state.inputValue =e.target .value
    this.setState({
      inputValue: this.input.value
    });
  }

  //增加列表
  addList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: ""
      },
      () => {
        // console.log(this.ul.querySelectorAll('li').length)
      }
    );
  }

  // 删除列表项
  deleteItem(index) {
    console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default Xiaojiejie;
