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
          <Masthead className="masthead--resume"/>
          <div className="center-absolute text-center">
            <p className="masthead__paragraph italic">
              Here is my
            </p>
            <strong className="masthead__title block">
              Resume
            </strong>
            <Button className="button--transparent" onClick={this.onDownloadClick}>
              Download Resume
            </Button>
          </div>
        </div>
        <div className="content__subsection text-center">
          <h2>
            Resume
          </h2>
          <div className="description__wrapper border-bottom center">
            <div className="description--3col">
              <h4>
                Technologies
              </h4>
            </div>
            <div className="description--3col">
              <h5 className="margin-top-3">
                Primary
              </h5>
              <ul className="description__list">
                <li>
                  Javascript / ES6
                </li>
                <li>
                  Reactjs
                </li>
                <li>
                  Flux Architecture
                </li>
                <li>
                  Webpack
                </li>
                <li>
                  Javascript / ES6
                </li>
                <li>
                  Babel
                </li>
                <li>
                  HTML5 / CSS3
                </li>
                <li>
                  PostCSS
                </li>
                <li>
                  BEM methodology
                </li>
              </ul>
            </div>
            <div className="description--3col">
              <h5 className="margin-top-3">
                Secondary
              </h5>
              <ul className="description__list">
                <li>
                  Angular
                </li>
                <li>
                  Node.js / Express
                </li>
                <li>
                  Grunt
                </li>
                <li>
                  D3.js
                </li>
                <li>
                  Nginx
                </li>
                <li>
                  Docker
                </li>
              </ul>
            </div>
          </div>
          <div className="description__wrapper text-left">
            <div className="description--4col">
              <h4>
                Work Experience
              </h4>
            </div>
            <div className="description--4col-3 margin-top-3">
              <div className="description__job">
                <h5>
                  Web Engineer
                </h5>
                <p>
                  CogoLabs, Cambridge, MA, November 2014 – Present
                </p>
                <ul className="description__list">
                  <li>
                    Led walkthroughs of major accounting cycles that required dozens of interviews with senior members throughout the client organization
                  </li>
                  <li>
                    Top-performer in PwC's annual performance review for both years at the company; received an 'exceeded expectations' in all performance reviews for individual client engagements for the previous year
                  </li>
                  <li>
                    Assisted with the development of the overall audit approach for revenue and inventory for a multinational sports equipment manufacturer with over $1 billion in sales
                  </li>
                  <li>
                    Tailored audit procedures procedures to meet changing public accounting standards by incorporating and working with PwC specialists in the areas of journal entries, taxes, and investment valuations
                  </li>
                </ul>
              </div>
              <div className="description__job">
                <h5>
                  Web Engineer
                </h5>
                <p>
                  CogoLabs, Cambridge, MA, November 2014 – Present
                </p>
                <ul className="description__list">
                  <li>
                    Led walkthroughs of major accounting cycles that required dozens of interviews with senior members throughout the client organization
                  </li>
                  <li>
                    Top-performer in PwC's annual performance review for both years at the company; received an 'exceeded expectations' in all performance reviews for individual client engagements for the previous year
                  </li>
                  <li>
                    Assisted with the development of the overall audit approach for revenue and inventory for a multinational sports equipment manufacturer with over $1 billion in sales
                  </li>
                  <li>
                    Tailored audit procedures procedures to meet changing public accounting standards by incorporating and working with PwC specialists in the areas of journal entries, taxes, and investment valuations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
