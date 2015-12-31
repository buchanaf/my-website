import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default class Input extends Component {

  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur:PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
    name: null,
  }

  constructor(props) {
    super(props);
  }

  onChangeHandler = (e) => {
    e.preventDefault();
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  onFocusHandler = (e) => {
    e.preventDefault();
    if (this.props.onFocusHandler) {
      this.props.onFocusHandler(e);
    }
  }

  onBlurHandler = (e) => {
    e.preventDefault();
    if (this.props.onBlurHandler) {
      this.props.onBlurHandler(e);
    }
  }

  onKeyUpHandler = (e) => {
    e.preventDefault();
    if (this.props.onKeyUpHandler) {
      this.props.onKeyUpHandler(e);
    }
  }

  render() {
    const { className, type, placeholder, name, value } = this.props;
    return (
      <input
        className={cx('input', className)}
        name={name}
        onChange={this.onChangeHandler}
        onFocusHandler={this.onFocusHandler}
        onBlurHandler={this.onBlurHandler}
        onKeyUpHandler={this.onKeyUpHandler}
        placeholder={placeholder}
        type={type}
        value={value} />
    );
  }
}
