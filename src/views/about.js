import React, { Component } from 'react';
import Helmet from 'react-helmet';

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
  };

  render() {
    return (
      <div className="content">
        <Helmet title="About Me"/>
        <div className="masthead__container">
          <Masthead className="masthead--about"/>
          <div className="center-absolute text-center">
            <strong className='masthead__title block'>
              About me
            </strong>
          </div>
        </div>
        <div className="content__subsection text-center">
          <Circle image={Cruise} >
            <div className="circle__background--front">
              <div className="circle__wrapper">
                <h5 className="circle__title">
                  Traveling
                </h5>
                <span className="circle__description">
                  By virtue of weddings, scattered family, and a girlfriend, I've found myself getting to some pretty cool places.
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={Dogs}>
            <div className="circle__background--front">
              <div className="circle__wrapper">
                <h5 className="circle__title">
                  Dogs
                </h5>
                <span className="circle__description">
                  I just really like dogs. I think 2016 is going to be the year...
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={Snowboarding}>
            <div className="circle__background--front">
              <div className="circle__wrapper">
                <h5 className="circle__title">
                  Snowboarding
                </h5>
                <span className="circle__description">
                  I've had a blast snowboarding in Vermont, Maine, and Colorado.
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={Tough} >
            <div className="circle__background--front">
              <div className="circle__wrapper">
                <h5 className="circle__title">
                  Toughmudder
                </h5>
                <span className="circle__description">
                  I don't actual enjoy running, but I had fun completing my first mudder in Vermont.
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={Siblings}>
            <div className="circle__background--front">
              <div className="circle__wrapper">
                <h5 className="circle__title">
                  Siblings
                </h5>
                <span className="circle__description">
                  Hannah and Josh! Living in NYC and Raleigh, respectively. Both coding as well.
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={College} >
            <div className="circle__background--front">
              <div className="circle__wrapper">
                <h5 className="circle__title">
                  Boston College
                </h5>
                <span className="circle__description">
                  It's sad how my graduation year keeps getting further and further away.
                </span>
              </div>
            </div>
          </Circle>
          <Circle image={Weddings} >
            <div className="circle__background--front">
              <div className="circle__wrapper">
                <h5 className="circle__title">
                  Weddings
                </h5>
                <span className="circle__description">
                  Congrats to those in 2015 and those coming up in 2016! They have been a blast, and I can't wait for the next ones.
                </span>
              </div>
            </div>
          </Circle>
        </div>
        <div className="masthead__container">
          <div className="masthead--cogo" />
        </div>
        <div className="content__subsection text-center">
          <div className="content__hr">
            <h2 className="content__title">
              Cogo Labs
            </h2>
            <h3 className="content__subtitle">
              2014 to Present
            </h3>
          </div>
          <div className="description__wrapper center">
            <p className="content__description center">
              I graduated from Boston College in 2011 with a degree in accounting in information systems. After working at PwC for 2 and 1/2 years, I decided to change things up and learn how to code. So, I applied and was accepted into Fullstack Academy and learned the fundamentals of web development. I then accepted a job from Cogo Labs, a tech incubator, as a web engineer. There, I've further refined my front-end skills with a focus on React.
            </p>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc1} />
              <span className="circle__span">
                Some random facts about work and what I used to do there. A little extra long.
              </span>
            </div>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc2} />
              <span className="circle__span">
                Some random facts about work and what I used to do there. A little extra long.
              </span>
            </div>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc3} />
              <span className="circle__span">
                Some random facts about work and what I used to do there.
              </span>
            </div>
          </div>
        </div>
        <div className="masthead__container">
          <div className="masthead--pwc" />
        </div>
        <div className="content__subsection text-center">
          <div className="content__hr">
            <h2 className="content__title">
              PwC
            </h2>
            <h3 className="content__subtitle">
              2011 to 2014
            </h3>
          </div>
          <div className="description__wrapper center">
            <p className="content__description center">
              I graduated from Boston College in 2011 with a degree in accounting in information systems. After working at PwC for 2 and 1/2 years, I decided to change things up and learn how to code. So, I applied and was accepted into Fullstack Academy and learned the fundamentals of web development. I then accepted a job from Cogo Labs, a tech incubator, as a web engineer. There, I've further refined my front-end skills with a focus on React.
            </p>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc1} />
              <span className="circle__span">
                Some random facts about work and what I used to do there.
              </span>
            </div>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc2} />
              <span className="circle__span">
                Some random facts about work and what I used to do there.
              </span>
            </div>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc3} />
              <span className="circle__span">
                Some random facts about work and what I used to do there. A little extra long.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
