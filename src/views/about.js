import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from 'src/config';

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
        <Helmet {...config.app.about} />
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
                  By virtue of weddings, scattered family, and a girlfriend, I've find myself bopping around a lot.
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
                  I love getting out to Maine, Vermont, or Colorado as much as possible.
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
                  Honestly, I've only done one Toughmudder but this is a great picture.
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
                  Hannah and Josh! 3 developer brothers and sisters spread across Boston, NYC and Raleigh.
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
                  5 year reunion in June with my old, degenerate roommates.
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
                  These seem to take up enough time to warranty this circle-thingy.
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
              Cogo Labs has been my first web development job, and it's been great so far. It has truly affirmed my decision to get out of accounting. It's helped to solidify my skills in Javascript, HTML, and CSS while also broadening my understanding of build tools, production code optimizations, and other cool hipster-JS stuff (lookin at you Babel / Webpack / React / Redux). The free cold brew is also a pretty solid perk even though it makes me feel strange after 3 cups.
            </p>
          </div>
          <div className="circle__job">
            <img className="circle__figure--job" src={cogolabs2} />
            <span className="circle__span">
              This isn't a very good picture, but I don't really like taking pictures so I rolled with it.
            </span>
          </div>
          <div className="circle__job">
            <img className="circle__figure--job" src={cogolabs3} />
            <span className="circle__span">
              Here I am testing some code. I hear that's a good thing to do. I personally just like making all the lights green.
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
              PwC-- the genesis of my career. I started out at PwC Audit working in Utilities and Consumer Industrial Products. Now, I know what you are thinking: there is no way that can be interesting. But, I'm here to tell you that's <em>wrong</em>. There is nothing, nothing, that gets me more jacked up than finding a material misstatement.
              Just kidding. It's about as boring as it sounds, and in a lot of ways, much worse than it sounds. While the the late nights, weekends worked, and general stress was kind of a bummer, I did get to meet some great people and make some great friends.
            </p>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc2} />
              <span className="circle__span">
                Here's my buddy Joe. Although we didn't ever have those cool, trendy standing desks, working at a conference table was fun.
              </span>
            </div>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc1} />
              <span className="circle__span">
                I believe this photo was taken at 3am on a Sunday night. It could have also been a Saturday or Friday. I don't remember.
              </span>
            </div>
            <div className="circle__job">
              <img className="circle__figure--job" src={pwc3} />
              <span className="circle__span">
                Travel can be rough, but in the end, winning things like "Guest of the Week" make it all worth it in the end.
              </span>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
