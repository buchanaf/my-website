import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default class Button extends Component {

  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
  };

  static defaultProps = {
    type: 'button',
    disabled: false,
    name: null,
  };

  constructor(props) {
    super(props);
  }

  onClickHandler = (e) => {
    e.preventDefault();
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    const { className, type, disabled, name } = this.props;
    return (
      <button onClick={this.onClickHandler}
        className={cx('button', className)}
        disabled={disabled}
        type={type}
        name={name}>
       {this.props.children}
      </button>
    );
  }
}
