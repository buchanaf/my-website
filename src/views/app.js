import React, { Component, PropTypes } from 'react';

export default class App extends Component {

  static propTypes = {
    header: PropTypes.any,
    main: PropTypes.any,
    footer: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      indexView: true,
    };
  }

  onIndexAnimation = () => {
    this.setState({ indexView: false });
  };

  render() {
    const { indexView } = this.state;
    return (
      <div className="app-container">
        {this.props.header}
        {React.cloneElement(this.props.main,
          {onIndexAnimation: this.onIndexAnimation, indexView})
        }
        {this.props.footer}
      </div>
    );
  }

}
