import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Masthead from 'components/masthead';
import Circle from 'components/circle';

import Cruise from 'assets/cruise.jpg';
import Dogs from 'assets/dogs.jpg';
import Snowboarding from 'assets/snowboarding.jpg';
import Tough from 'assets/tough.jpg';
import Siblings from 'assets/siblings.jpg';
import College from 'assets/college.jpg';
import Weddings from 'assets/weddings.jpg';
import cogolabs2 from 'assets/cogolabs2.jpg';
import cogolabs3 from 'assets/cogolabs3.jpg';
import pwc1 from 'assets/pwc1.jpg';
import pwc2 from 'assets/pwc2.jpg';
import pwc3 from 'assets/pwc3.jpg';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  onResumeClick = () => {
    this.history.pushState(null, '/resume');
  };

  render() {
    return (
      <main className="content">
        <Helmet title="About Me"/>
        <section className="masthead__container">
          <Masthead className="masthead--about"/>
          <div className="center-absolute text-center">
            <strong className="masthead__title block">
              About me
            </strong>
          </div>
        </section>
        <section className="content__subsection text-center">
          <div className="content__title-wrapper">
            <h2 className="content__title content__hr">
              Interests
            </h2>
            <h3 className="content__subtitle">
              Outside of Work
            </h3>
          </div>
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
                  Congrats to those in 2015 and those coming up in 2016! They have been a blast!
                </span>
              </div>
            </div>
          </Circle>
        </section>
        <section className="masthead__container">
          <div className="masthead--cogo" />
        </section>
        <section className="content__subsection text-center">
          <div className="content__title-wrapper">
            <h2 className="content__title content__hr">
              Cogo Labs
            </h2>
            <h3 className="content__subtitle">
              2014 to Present
            </h3>
          </div>
          <div className="description__wrapper center">
            <p className="content__description center">
              Cogo Labs has been my first web development job. So far, it's been an awesome experience. I've really solidified my skills in Javascript, HTML, and CSS, and really broadened my understanding of build tools, production code optimizations, and server-side code (Python and Node). The free cold brew and Friday launches have also been pretty sweet.
            </p>
          </div>
          <div className="circle__job">
            <img className="circle__figure--job" src={cogolabs2} />
            <span className="circle__span">
              At Cogo, we like charts and we like to put them on the walls.
            </span>
          </div>
          <div className="circle__job">
            <img className="circle__figure--job" src={cogolabs3} />
            <span className="circle__span">
              Here's my desk. It's a pretty solid spot. As you can see, I sometimes test my code.
            </span>
          </div>
        </section>
        <section className="masthead__container">
          <div className="masthead--pwc" />
        </section>
        <section className="content__subsection text-center">
          <div className="content__title-wrapper">
            <h2 className="content__title content__hr">
              PwC
            </h2>
            <h3 className="content__subtitle">
              2011 to 2014
            </h3>
          </div>
          <div className="description__wrapper center">
            <p className="content__description center">
              Note that the above picture is not actually mine, but it pretty accurately represents a lot of the audit rooms that I worked in (honestly, who really needs windows?). I started my career doing audit at PwC. My time there included a lot of ups and downs. The best part was definitely the people. I made some of my best friends there. The worst parts definitely being the travel, hours, and menial work.
            </p>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc2} />
              <span className="circle__span">
                There is my buddy Joe. Audit teams were usually between 4-12 people, and we always worked around a big conference table.
              </span>
            </div>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc1} />
              <span className="circle__span">
                This photo was taken at 3am in the office on a Sunday night. 'Nuff said.
              </span>
            </div>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc3} />
              <span className="circle__span">
                While travel could be rough, there were some perks like this. The hotel points also came in handy when booking vacations.
              </span>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
