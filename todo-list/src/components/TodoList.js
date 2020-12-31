import React, { Component } from 'react';
import classNames from 'classnames'
import './TodoList.css'
class TodoItem extends Component {


  render() {
    const { item } = this.props;
    return (
      <div  className={classNames('TodoItem', { 'TodoItem-done': item.isComplete })} >
        <div className='block'>{item.title}</div>
      </div >
    )
  }
};

export default TodoItem;