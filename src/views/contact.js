import React, { Component } from 'react';

import Masthead from 'components/masthead';
import Button from 'components/button';
import Input from 'components/input';
import BostonImg from 'assets/boston.jpg';

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
          <h3>
            Contact
          </h3>
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
        <div className="content__subsection text-center clear">
          <h3>
            Send Me A Message
          </h3>
          <div className="col-2 resume__container text-left inline-block">
            <form>
              <div className="inline-block">
                <label>
                  First Name:
                  <Input className="input--medium block" />
                </label>
              </div>
              <div className="inline-block input__wrapper">
                <label>
                  Last Name:
                  <Input className="input--medium block" />
                </label>
              </div>
              <label className="block">
                Email *:
                <Input className="input block" />
              </label>
              <label className="block">
                Subject:
                <Input className="input block" />
              </label>
              <label className="block">
                Message:
                <textarea className="textarea" />
              </label>
              <Button className="button--black">
                Send
              </Button>
            </form>
          </div>
          <div className="col-2 resume__container relative inline-block">
            <img className="image--boston" src={BostonImg} />
          </div>
        </div>
      </div>
    );
  }
}
