import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import cx from 'classnames';

export default class Circle extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
    image: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    type: 'button',
    disabled: false,
    name: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      deg: 0,
    };
  }

  onToggleEvent = (e) => {
    e.preventDefault();
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { className, image } = this.props;
    const { hover } = this.state;

    return (
      <Motion style={{ x: spring(hover ? 180 : 0, [220, 30]) }}>
        {(style) => {
          return (
            <section className="circle__container" onMouseEnter={this.onToggleEvent} onMouseLeave={this.onToggleEvent} onClick={this.onToggleEvent}>
              <div className={cx('circle', className)} style={ {
                WebkitTransform: `rotateY(${Math.ceil(style.x)}deg)`,
                transform: `rotateY(${Math.ceil(style.x)}deg)` }}
              >
                <figure className="circle__figure circle__figure--front">
                  {this.props.children}
                </figure>
                <img className="circle__figure circle__figure--back" src={image} />
              </div>
            </section>
          );
        }}
      </Motion>
    );
  }
}
