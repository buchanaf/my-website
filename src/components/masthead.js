import React, { Component, PropTypes } from 'react';

export default class Masthead extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { className } = this.props;
    return (
      <img className={className}>
       {this.props.children}
      </img>
    );
  }
}
