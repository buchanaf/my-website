import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import cx from 'classnames';
import config from 'src/config';

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
      sideOpen: false,
    };
  }

  componentDidMount = () => {
    const images = Object.keys(window.__data.assets).filter((asset) => {
      return /\.jpg/.test(asset);
    }).map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => { resolve(); };
        img.src = window.__data.assets[image];
      });
    });

    Promise.all(images);
  };

  onSideNavToggle = () => {
    const { sideOpen } = this.state;
    this.setState({ sideOpen: !sideOpen });
    if (!sideOpen) {
      window.addEventListener('touchmove', this.preventTouchMove);
    }
    if (sideOpen) {
      window.removeEventListener('touchmove', this.preventTouchMove);
    }
  };

  preventTouchMove = (e) => {
    e.preventDefault();
  };

  render() {
    const { sideOpen } = this.state;

    return (
      <div className={ cx('app-container', { 'app-container--left': sideOpen }) }>
        <Helmet {...config.app.head} />
        { this.props.header }
        { React.cloneElement(this.props.sideNav,
          { onSideNavToggle: this.onSideNavToggle, sideOpen })
        }
        { React.cloneElement(this.props.main,
          { sideOpen })
        }
        { this.props.footer }
      </div>
    );
  }

}
