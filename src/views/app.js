import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default class App extends Component {
  static propTypes = {
    header: PropTypes.any,
    main: PropTypes.any,
    footer: PropTypes.any,
    sideNav: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      indexView: true,
      sideOpen: false,
    };
  }

  onIndexAnimation = () => {
    this.setState({ indexView: false });
  };

  onSideNavToggle = () => {
    const { sideOpen } = this.state;
    this.setState({ sideOpen: !sideOpen });
    if (sideOpen) {
      window.addEventListener('touchmove', this.preventTouchMove);
    }
    if (!sideOpen) {
      window.removeEventListener('touchmove', this.preventTouchMove);
    }
  };

  render() {
    const { indexView, sideOpen } = this.state;

    return (
      <div className={cx('app-container', {'app-container--left': sideOpen})}>
        { this.props.header }
        { React.cloneElement(this.props.sideNav,
          { onSideNavToggle: this.onSideNavToggle, sideOpen })
        }
        { React.cloneElement(this.props.main,
          { onIndexAnimation: this.onIndexAnimation, indexView, sideOpen })
        }
        { this.props.footer }
      </div>
    );
  }

  preventTouchMove = (e) => {
    e.preventDefault();
  };

}
