import React, { Component } from 'react';

import Masthead from 'components/masthead';
import Button from 'components/button';
import Circle from 'components/circle';

import Cruise from 'assets/cruise.jpg';
import Dogs from 'assets/dogs.jpg';
import Snowboarding from 'assets/snowboarding.jpg';
import Tough from 'assets/tough.jpg';
import Siblings from 'assets/tough.jpg';
import College from 'assets/tough.jpg';

export default class About extends Component {
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
          <i className="icon icon--angle-down" />
        </div>
        <div className="content__subsection text-center">
          <Circle image={Cruise} />
          <Circle image={Dogs} />
          <Circle image={Snowboarding} />
          <Circle image={Tough} />
          <Circle image={Siblings} />
          <Circle image={College} />
        </div>
      </div>
    );
  }
}
