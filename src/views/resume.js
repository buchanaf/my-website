import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Masthead from 'components/masthead';
import Button from 'components/button';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  onResumeClick = () => {
    this.history.pushState(null, '/resume');
  };

  render() {
    return (
      <div className="content">
        <Helmet title="Resume"/>
        <div className="masthead__container">
          <Masthead className="masthead--resume"/>
          <div className="center-absolute text-center">
            <div className="masthead__title-wrapper">
              <strong className="masthead__title block">
                Resume
              </strong>
            </div>
            <a className="button button--transparent" href="/dist/1a556a1cd058410e4f3a59d0a62fe6ac.jpg" download="1a556a1cd058410e4f3a59d0a62fe6ac.jpg">
              Download Resume
            </a>
          </div>
        </div>
        <div className="resume content__subsection text-center">
          <div className="content__hr">
            <h2 className="content__title">
              My Skills
            </h2>
            <h3 className="content__subtitle">
              And alleged talents...
            </h3>
          </div>
          <div className="content__container border-bottom center">
            <h4 className="header4">
              Technology
            </h4>
            <div className="col-3-2 right">
              <div className="col-3 col-3--mobile left align-top">
                <h5 className="header5">
                  Primary
                </h5>
                <ul className="resume__list resume__list--inside">
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
                    Babel
                  </li>
                  <li>
                    HTML5 / CSS3
                  </li>
                  <li>
                    PostCSS
                  </li>
                </ul>
              </div>
              <div className="col-3 col-3--mobile left align-top">
                <h5 className="header5">
                  Secondary
                </h5>
                <ul className="resume__list resume__list--inside">
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
          </div>
          <div className="content__container text-left border-bottom">
            <h4 className="header4">
              Experience
            </h4>
            <div className="col-4-3 right align-top">
              <div className="resume__job">
                <h5 className="header5">
                  Web Engineer
                </h5>
                <p>
                  CogoLabs, Cambridge, MA, November 2014 – Present
                </p>
                <ul className="resume__list">
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
              <div className="resume__job">
                <h5 className="header5">
                  Web Engineer
                </h5>
                <p>
                  CogoLabs, Cambridge, MA, November 2014 – Present
                </p>
                <ul className="resume__list">
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
          <div className="content__container text-left">
            <h4 className="header4">
              Education
            </h4>
            <div className="col-4-3 right align-top">
              <div className="resume__job">
                <h5 className="header5">
                  Boston College, Carroll School of Management
                </h5>
                <p className="italic">
                  Bachelor of Science in Business Administration: Information Systems and Accounting
                </p>
                <ul className="resume__list">
                  <li>
                    GPA: 3.7; Rank: 114/522
                  </li>
                  <li>
                    Accolades: Cum Laude, Dean’s List First Honors, Golden Key Club Honor Society
                  </li>
                  <li>
                    Semester abroad: University of Glasgow
                  </li>
                </ul>
              </div>
              <div className="resume__job">
                <h5 className="header5">
                  Fullstack Academy of Code
                </h5>
                <p className="italic">
                  Web Development Immsersive Program
                </p>
                <ul className="resume__list">
                  <li>
                    A full-time immersive Software Development program focused on full-stack JavaScript including Node.js/Express, Angular.js, MongoDB, HTML5/CSS3, SQL. Class of 18 students selected from 200+ applicants after technical challenge and multiple interviews.
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
