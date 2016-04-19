import React, { Component } from 'react';
import { Link } from 'react-router';
import smoothScroll from 'smoothscroll';
import config from 'src/config';

import Helmet from 'react-helmet';
import Dom from 'utils/dom';

import Masthead from 'components/masthead';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.setState({ scrollTo: Dom.getElement('masthead--home').clientHeight });
  };

  onClickScroll = (e) => {
    e.preventDefault();
    smoothScroll(this.state.scrollTo, 1000);
  };

  render() {
    return (
      <main className="content">
        <Helmet {...config.app.home} />
        <section className="masthead__container masthead__container--animate">
          <Masthead className="masthead--home"/>
          <div className="center-absolute text-center">
            <div className="masthead__title-wrapper">
              <strong className="masthead__title masthead__title--animate block">
                Front-end
              </strong>
              <strong className="masthead__subtitle masthead__title--animate block">
                Developer
              </strong>
            </div>
            <Link className="button button--transparent" to="/resume">
              Resume
            </Link>
            <Link className="button button--transparent" to="/contact">
              Contact
            </Link>
          </div>
          <i className="icon icon--angle-down" onClick={this.onClickScroll}/>
        </section>
        <section className="content__subsection text-center">
          <div className="content__title-wrapper">
            <h2 className="content__title content__hr content__hr--hide">
              Alex Buchanan
            </h2>
            <h3 className="content__subtitle">
              A Little Bit About Me
            </h3>
          </div>
          <div className="image--headshot"/>
          <p className="content__description">
            I graduated from Boston College in 2011 with a degree in accounting in information systems. After working at PwC for 2 and 1/2 years, I realized that I really wanted to do something different. I applied and was accepted into Fullstack Academy and learned the fundamentals of web development. From there, I accepted a job working at Cogo Labs, a tech incubator, as a web engineer. I've continued to refine my front-end skills with a focus on React.
          </p>
        </section>
      </main>
    );
  }
}
