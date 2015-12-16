import React, { Component, PropTypes } from 'react';

export default class Masthead extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className="masthead">
       {this.props.children}
      </img>
    );
  }
}
