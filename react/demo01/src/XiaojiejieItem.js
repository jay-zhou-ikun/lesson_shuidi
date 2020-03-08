import React, { Component } from 'react';
import propTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    //我们的组件第一次存在于dom中， 函数是不会被执行的
    //如果已经存在于dom中， 函数才会被执行
    // componentWillReceiveProps() {
    //     console.log('RRRRRRRRRRRRRR')
    // }

    // componentWillUnmount() {
    //     console.log('childsaassaasassa')
    // }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true
        } else {
              return false;
        }
    }

    render() { 
        console.log('child-render')
        return ( 
        <li onClick={this.handleClick}>
            {this.props.avname}为你服务
            {this.props.content}</li>
         );
    }

    handleClick() {
        // console.log('撩拨了小姐姐')
        // console.log(this.props.index)
        // this.props.list = []
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    avname: propTypes.string.isRequired,
    content: propTypes.string,
    index:propTypes.number,
    deleteItem:propTypes.func
}
XiaojiejieItem.defaultProps = {
    avname:'松岛枫'
}
 
export default XiaojiejieItem;