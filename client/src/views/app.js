import React, { Component, PropTypes } from 'react';

export default class App extends Component {

  static propTypes = {
    header: PropTypes.any,
    main: PropTypes.any,
    footer: PropTypes.any,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        {this.props.header}
        {this.props.main}
        {this.props.footer}
      </div>
    );
  }

}
