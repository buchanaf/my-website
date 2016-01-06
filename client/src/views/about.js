import React, { Component } from 'react';

import Masthead from 'components/masthead';
import Button from 'components/button';
import Circle from 'components/circle';

const Cruise = require('assets/cruise.jpg');
const Dogs = require('assets/dogs.jpg');
const Snowboarding = require('assets/snowboarding.jpg');
const Tough = require('assets/tough.jpg');
const Siblings = require('assets/siblings.jpg');
const College = require('assets/college.jpg');
const Weddings = require('assets/weddings.jpg');
const pwc1 = require('assets/pwc1.jpg');
const pwc2 = require('assets/pwc2.jpg');
const pwc3 = require('assets/pwc3.jpg');

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
          <h3>
            Some of my <span className="block"><em>Interests</em> and <em>Memories</em></span>
          </h3>
          <Circle image={Cruise} >
            <div className="circle__figure__text">
              <div className="circle__figure__wrapper">
                <h5 className="circle__figure__title">
                  Traveling
                </h5>
                <span className="circle__figure__description">
                  with my girlfriend Robin
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={Dogs}>
            <div className="circle__figure__text">
              <div className="circle__figure__wrapper">
                <h5 className="circle__figure__title">
                  Dogs
                </h5>
                <span className="circle__figure__description">
                  pretty much all things
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={Snowboarding}>
            <div className="circle__figure__text">
              <div className="circle__figure__wrapper">
                <h5 className="circle__figure__title">
                  Snowboarding
                </h5>
                <span className="circle__figure__description">
                  in Colorado with buddies
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={Tough} >
            <div className="circle__figure__text">
              <div className="circle__figure__wrapper">
                <h5 className="circle__figure__title">
                  Toughmudder
                </h5>
                <span className="circle__figure__description">
                  but honestly, I hate running
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={Siblings}>
            <div className="circle__figure__text">
              <div className="circle__figure__wrapper">
                <h5 className="circle__figure__title">
                  Siblings
                </h5>
                <span className="circle__figure__description">
                  Hannah and Josh!
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={College} >
            <div className="circle__figure__text">
              <div className="circle__figure__wrapper">
                <h5 className="circle__figure__title">
                  Boston College 2011
                </h5>
                <span className="circle__figure__description">
                  I keep getting older but my graduation year stays the same
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={Weddings} >
            <div className="circle__figure__text">
              <div className="circle__figure__wrapper">
                <h5 className="circle__figure__title">
                  Weddings
                </h5>
                <span className="circle__figure__description">
                  Always a good time
                </span>
              </div>
            </div>
          </Circle>
        </div>
        <div className="masthead__container">
          <div className="masthead--pwc" />
        </div>
        <div className="content__subsection text-center">
          <h3>
            PricewaterhouseCoopers
          </h3>
          <span>
            2011 to 2014
          </span>
          <div className="description__wrapper center">
            <p className="content__description center">
              I graduated from Boston College in 2011 with a degree in accounting in information systems. After working at PwC for 2 and 1/2 years, I decided to change things up and learn how to code. So, I applied and was accepted into Fullstack Academy and learned the fundamentals of web development. I then accepted a job from Cogo Labs, a tech incubator, as a web engineer. There, I've further refined my front-end skills with a focus on React.
            </p>
            <div className="job__wrapper">
              <img className="circle__figure--job" src={pwc1} />
              <span className="job__wrapper__span">
                Some random facts about work and what I used to do there.
              </span>
            </div>
            <div className="job__wrapper">
              <img className="circle__figure--job" src={pwc2} />
              <span className="job__wrapper__span">
                Some random facts about work and what I used to do there.
              </span>
            </div>
            <div className="job__wrapper">
              <img className="circle__figure--job" src={pwc3} />
              <span className="job__wrapper__span">
                Some random facts about work and what I used to do there. A little extra long.
              </span>
            </div>
          </div>
        </div>
        <div className="masthead__container">
          <div className="masthead--cogo" />
        </div>
        <div className="content__subsection text-center">
          <h3>
            CogoLabs
          </h3>
          <span>
            2014 to present
          </span>
          <div className="description__wrapper center">
            <p className="content__description center">
              I graduated from Boston College in 2011 with a degree in accounting in information systems. After working at PwC for 2 and 1/2 years, I decided to change things up and learn how to code. So, I applied and was accepted into Fullstack Academy and learned the fundamentals of web development. I then accepted a job from Cogo Labs, a tech incubator, as a web engineer. There, I've further refined my front-end skills with a focus on React.
            </p>
            <div className="job__wrapper">
              <img className="circle__figure--job" src={pwc1} />
              <span className="job__wrapper__span">
                Some random facts about work and what I used to do there. A little extra long.
              </span>
            </div>
            <div className="job__wrapper">
              <img className="circle__figure--job" src={pwc2} />
              <span className="job__wrapper__span">
                Some random facts about work and what I used to do there. A little extra long.
              </span>
            </div>
            <div className="job__wrapper">
              <img className="circle__figure--job" src={pwc3} />
              <span className="job__wrapper__span">
                Some random facts about work and what I used to do there.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}