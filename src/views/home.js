import React, { Component } from 'react';
import { spring, Motion } from 'react-motion'
import cx from 'classnames';
import Dom from 'utils/dom';

import Masthead from 'components/masthead';
import Button from 'components/button';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false,
    };
  }

  componentDidMount = () => {
    this.props.onIndexAnimation();
    this.setState({ scrollTo: Dom.getElement('masthead--home').clientHeight});
  };

  onResumeClick = () => {
    this.props.history.pushState(null, '/resume');
  };

  onClickScroll = (e) => {
    e.preventDefault();
    this.setState({scroll: true});
  };

  render() {
    const { indexView } = this.props;
    const { scroll, scrollTo } = this.state;

    return (
      <Motion style={{x: spring( scroll ? scrollTo : 0, [100, 20])}}>
        {(style) => {
          this.scrollHandler(style.x);
          return (
            <div className="content">
              <div className={cx('masthead__container', {'masthead__container--animate': indexView})}>
                <Masthead className="masthead--home"/>
                <div className="center-absolute text-center">
                  <strong className={cx('masthead__title', {'masthead__title--animate': indexView}, 'block')}>
                    JAVASCRIPT
                  </strong>
                  <Button className="button--transparent" onClick={this.onResumeClick}>
                    Resume
                  </Button>
                  <Button className="button--transparent">
                    Contact
                  </Button>
                </div>
                <i className="icon icon--angle-down" onClick={this.onClickScroll}/>
              </div>
              <div className="content__subsection text-center">
                <div className="content__hr--short">
                  <h2 className="content__title">
                    Alex Buchanan
                  </h2>
                  <h3 className="content__subtitle">
                    A Little Bit About Me
                  </h3>
                </div>
                <div className="photo--headshot center"/>
                <p className="content__description center">
                  I graduated from Boston College in 2011 with a degree in accounting in information systems. After working at PwC for 2 and 1/2 years, I decided to change things up and learn how to code. So, I applied and was accepted into Fullstack Academy and learned the fundamentals of web development. I then accepted a job from Cogo Labs, a tech incubator, as a web engineer. There, I've further refined my front-end skills with a focus on React.
                </p>
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }

  scrollHandler = (scrollPos) => {
    if (__CLIENT__) {
      const windowStart = Math.floor(window.scrollY);
      const scrollMove = Math.floor(scrollPos);
      const scrollY = scrollMove >= windowStart ? scrollMove : windowStart;
      window.scrollTo(0, scrollY);
    }
  };

}