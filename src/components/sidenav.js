import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import setClass from'element-class';

export default class PageHeader extends Component {
  static propTypes = {
    sideOpen: PropTypes.bool,
    onSideNavToggle: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false,
    };
  }

  onMenuClick = () => {
    const { sideOpen } = this.props;
    this.props.onSideNavToggle();
    setClass(document.body).toggle('scroll--prevent');
    if (!sideOpen) {
      window.scrollTo(0, 0);
    }
  };

  onTouchHandler = (isMenuActive) => () => this.setState({ isMenuActive });

  render() {
    const { sideOpen } = this.props;
    const { isMenuActive } = this.state;


    return (
      <aside className="sidenav__container">
        <i className={cx('icon icon--menu', { 'icon--active': isMenuActive })}
          onTouchStart={this.onTouchHandler(true)}
          onTouchEnd={this.onTouchHandler(false)}
          onClick={this.onMenuClick}
        />
        <section className={ cx('sidenav', { 'side-nav--visible': sideOpen }) }>
          <nav className="sidenav__list">
            <Link className="sidenav__link" to="/" onClick={this.onMenuClick}>
              Home
            </Link>
            <Link className="sidenav__link" to="/about" onClick={this.onMenuClick}>
              About
            </Link>
            <Link className="sidenav__link" to="/resume" onClick={this.onMenuClick}>
              Resume
            </Link>
            <Link className="sidenav__link active" to="/contact" onClick={this.onMenuClick}>
              Contact
            </Link>
            <a className="button button--transparent button--resume" href="/dist/Buchanan_Resume.pdf" download="Buchanan_Resume.pdf">
              Download Resume
            </a>
          </nav>
        </section>
      </aside>
    );
  }
}
