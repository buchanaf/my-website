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
          <Masthead className="masthead--contact"/>
          <div className="center-absolute text-center">
            <p className="masthead__paragraph italic">
              Give me a
            </p>
            <strong className="masthead__title block">
              Ring
            </strong>
            <Button className="button--transparent" onClick={this.onDownloadClick}>
              Download Resume
            </Button>
          </div>
        </div>
        <div className="content__subsection text-center clear border-bottom">
          <h2>
            Contact
          </h2>
          <div className="resume__container col-3 align-middle left">
            <h5 className="resume__header5">
              Personal Information
            </h5>
            <p className="bold">
              Alex Buchanan
            </p>
            <p>
              10A Chauncy St. Apt. 25
            </p>
            <p>
              Cambridge, MA
            </p>
            <p>
              buchanaf@gmail.com
            </p>
          </div>
          <div className="resume__container col-3 align-top right">
            <div className="photo--headshot center" />
          </div>
        </div>
      </div>
    );
  }
}
