import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

import classNames from 'classnames';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })

  }

  render() {
    const { heading, children, onClick, item } = this.props;
    const { isCollapsed } = this.state;
    return (
      <div className="Accordion" onClick={this.onClick} >
        <div className="Heading" >
          <h2>{heading}</h2>
        </div>
        <div className="Content" >
          {!isCollapsed && <p> {children} </p>}
        </div>
      </div>
    )
  }
}

Accordion.protoType = {
  item: PropTypes.shape({
    heading: PropTypes.string,
    isCollapsed: PropTypes.bool
  }),
  onClick: PropTypes.func

}


export default Accordion;


