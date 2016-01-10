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
            <strong className="masthead__title block">
              Hello.
            </strong>
          </div>
        </div>
        <div className="content__subsection text-center clear">
          <div className="content__hr">
            <h2 className="content__title">
              Contact
            </h2>
            <h3 className="content__subtitle">
              Cambridge, MA
            </h3>
          </div>
          <div className="content__container col-3 text-center left">
            <h5 className="header5">
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
          <div className="content__container col-3 align-top right">
            <div className="photo--headshot center" />
          </div>
        </div>
        <div className="content__subsection text-center clear">
          <div className="content__hr">
            <h2 className="content__title">
              Message Me
            </h2>
            <h3 className="content__subtitle">
              With nice words
            </h3>
          </div>
          <div className="content__container col-2 text-left inline-block">
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
          <div className="col-2 content__container relative inline-block">
            <img className="image--boston" src={BostonImg} />
          </div>
        </div>
      </div>
    );
  }
}
