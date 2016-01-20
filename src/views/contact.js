import React, { Component } from 'react';
import request from 'superagent';
import Helmet from 'react-helmet';

import Masthead from 'components/masthead';
import Button from 'components/button';
import Input from 'components/input';
import BostonImg from 'assets/boston.jpg';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { ...this.getInitState() };
  }

  onResumeClick = () => {
    this.history.pushState(null, '/resume');
  };

  onFormChange = (key) => {
    return (e) => {
      const update = {};
      update[key] = e.target.value;
      this.setState(update);
    };
  };

  onSendClick = (e) => {
    e.preventDefault();
    this.setState({ ...{ sending: true }, ...this.getInitState() });
    request
      .post('/api/message')
      .send(this.state)
      .end(() => {

      });
  };

  getInitState = () => {
    return {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    };
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      subject,
      message,
    } = this.state;

    return (
      <div className="content">
        <Helmet title="Contact"/>
        <div className="masthead__container">
          <Masthead className="masthead--contact"/>
          <div className="center-absolute text-center">
            <div className="masthead__title-wrapper">
              <strong className="masthead__title block">
                Hello.
              </strong>
              <strong className="masthead__subtitle block">
                It's me.
              </strong>
            </div>
          </div>
        </div>
        <div className="content__subsection text-center clear">
          <div className="content__title-wrapper">
            <h2 className="content__title content__hr">
              Contact
            </h2>
            <h3 className="content__subtitle">
              Cambridge, MA
            </h3>
          </div>
          <div className="content__container col-3 left">
            <h5 className="header5 header5--center bold">
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
            <div className="image--headshot center" />
          </div>
        </div>
        <div className="content__subsection content text-left clear">
          <div className="content__title-wrapper">
            <h2 className="content__title content__hr">
              Message Me
            </h2>
            <h3 className="content__subtitle center">
              With nice words
            </h3>
          </div>
          <div className="content__container text-left inline-block">
            <form className="col-2">
              <div className="inline-block">
                <label>
                  First Name:
                  <Input className="input--medium block" value={firstName} onChange={this.onFormChange('firstName')} />
                </label>
              </div>
              <div className="input__wrapper">
                <label>
                  Last Name:
                  <Input className="input--medium block" value={lastName} onChange={this.onFormChange('lastName')} />
                </label>
              </div>
              <label className="block">
                Email *:
                <Input className="input block" value={email} onChange={this.onFormChange('email')} />
              </label>
              <label className="block">
                Subject:
                <Input className="input block" value={subject} onChange={this.onFormChange('subject')} />
              </label>
              <label className="block">
                Message:
                <textarea className="textarea" value={message} onChange={this.onFormChange('message')} />
              </label>
              <Button className="button--black" onClick={this.onSendClick}>
                Send
              </Button>
            </form>
            <div className="col-2 content__container relative inline-block">
              <img className="image--boston" src={BostonImg} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
