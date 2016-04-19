import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from 'src/config';

import Masthead from 'components/masthead';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  onResumeClick = () => {
    this.history.pushState(null, '/resume');
  };

  render() {
    return (
      <main className="content">
        <Helmet {...config.app.resume} />
        <section className="masthead__container">
          <Masthead className="masthead--resume"/>
          <div className="center-absolute text-center">
            <div className="masthead__title-wrapper">
              <strong className="masthead__title block">
                Resume
              </strong>
            </div>
            <a className="button button--transparent" href="/dist/Buchanan_Resume.pdf" download="Buchanan_Resume.pdf">
              Download Resume
            </a>
          </div>
        </section>
        <section className="resume content__subsection text-center">
          <div className="content__title-wrapper">
            <h2 className="content__title content__hr">
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
                    React
                  </li>
                  <li>
                    Flux Architecture (Redux)
                  </li>
                  <li>
                    Node.js / Express
                  </li>
                  <li>
                    HTML5 / CSS3
                  </li>
                  <li>
                    Webpack / Babel / PostCSS
                  </li>
                </ul>
              </div>
              <div className="col-3 col-3--mobile left align-top">
                <h5 className="header5">
                  Secondary
                </h5>
                <ul className="resume__list resume__list--inside">
                  <li>
                    Git
                  </li>
                  <li>
                    Nginx
                  </li>
                  <li>
                    Docker
                  </li>
                  <li>
                    Grunt / Gulp
                  </li>
                  <li>
                    D3.js
                  </li>
                  <li>
                    Angular
                  </li>
                  <li>
                    MongoDB
                  </li>
                  <li>
                    SQL
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content__container text-left border-bottom">
            <h4 className="header4">
              Work Experience
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
                    Led front-end development for website prototypes, including one app with over 60k users; overall, assisted or led front-end development on 7 new, public-facing sites
                  </li>
                  <li>
                    Collaborated with product managers and designers to implement A/B tests and increase site performance driving a 2x increase in user conversion rates on social sites
                  </li>
                  <li>
                    Overhauled site-starter scaffolding with an isomorphic React-Redux-Webpack kit
                  </li>
                  <li>
                    Developed the first isomorphic web application that was used in a production environment
                  </li>
                  <li>
                    Created an internal npm library of React components used on a variety of Cogo projects
                  </li>
                  <li>
                    Built complex user-interface tools featuring D3 charts, cached API calls in local storage, drag and drop, and custom sortable tables to support data-analytics for our analysts teams
                  </li>
                </ul>
              </div>
              <div className="resume__job">
                <h5 className="header5">
                  Assurance Associate, CPA
                </h5>
                <p>
                  PwC, Boston, MA, September 2011 – February 2014
                </p>
                <ul className="resume__list">
                  <li>
                    First associate in starting class to pass all Certified Public Accountant examinations; passed Level I of the Chartered Financial Analyst Program for personal development
                  </li>
                  <li>
                    Top-performer in PwC's annual performance review for both years at the company;  received an exceeded expectations in all performance reviews for engagements in 2014 fiscal year
                  </li>
                  <li>
                    Led walkthroughs of major accounting cycles that required dozens of interviews with senior members throughout the client organization
                  </li>
                  <li>
                    Assisted with the development of the overall audit approach for revenue and inventory for a multinational sports equipment manufacturer with over $1 billion in sales
                  </li>
                  <li>
                    Tailored audit procedures procedures to meet changing public accounting standards by working with PwC specialists in the areas of journal entries, taxes, and investment valuations
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
            </div>
          </div>
        </section>
      </main>
    );
  }
}
