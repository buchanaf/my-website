import React, { Component } from 'react';

import Masthead from 'components/masthead';
import Button from 'components/button';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  onResumeClick = () => {
    this.history.pushState(null, '/resume');
  }

  render() {
    return (
      <div className="content">
        <div className="masthead__container">
          <Masthead className="masthead--home"/>
          <div className="center-absolute text-center">
            <strong className="masthead__title block">
              JAVASCRIPT
            </strong>
            <Button className="button--transparent" onClick={this.onResumeClick}>
              Resume
            </Button>
            <Button className="button--transparent">
              Contact
            </Button>
          </div>
        </div>
        <div className="content__subsection text-center">
          <h2>
            A Little About Me
          </h2>
          <div className="photo--headshot center"/>
          <div className="description__wrapper center">
            <p className="content__description">
              I graduated from Boston College in 2011 with a degree in accounting in information systems. After working at PwC for 2 and 1/2 years, I decided to change things up and learn how to code. So, I applied and was accepted into Fullstack Academy and learned the fundamentals of web development. I then accepted a job from Cogo Labs, a tech incubator, as a web engineer. There, I've further refined my front-end skills with a focus on React.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
