import React, { Component } from 'react';
import request from 'superagent';
import Helmet from 'react-helmet';
import config from 'src/config';

import Masthead from 'components/masthead';
import Button from 'components/button';
import Input from 'components/input';
import BostonImg from 'assets/boston.jpg';

export default class Contact extends Component {
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
    this.setState({
      sending: true,
      emailError: false,
      emailSuccess: false,
    });
    request
      .post('/api/message')
      .send(this.state)
      .end((err) => {
        if (err) {
          this.setState({ sending: false, emailError: true });
        } else {
          this.setState({
            ...this.getInitState(),
            sending: false,
            emailSuccess: true,
          });
          setTimeout(() => {
            this.setState({
              emailSuccess: false,
            });
          }, 2500);
        }
      });
  };

  getInitState = () => {
    return {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      sending: false,
    };
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      subject,
      message,
      emailError,
      emailSuccess,
      sending,
    } = this.state;

    return (
      <main className="content">
        <Helmet {...config.app.contact} />
        <section className="masthead__container">
          <Masthead className="masthead--contact"/>
          <div className="center-absolute text-center">
            <h1 className="masthead__title-wrapper">
              <strong className="masthead__title block">
                Hello.
              </strong>
              <strong className="masthead__subtitle block">
                It's me.
              </strong>
            </h1>
          </div>
        </section>
        <section className="content__subsection text-center clear">
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
              Cambridge, MA
            </p>
            <a className="contact__email" href="mailto:alexdbuchanan6@gmail.com">
              alexdbuchanan6@gmail.com
            </a>
          </div>
          <div className="content__container col-3 align-top right">
            <div className="image--headshot center" />
          </div>
        </section>
        <section className="content__subsection content text-left clear">
          <div className="content__title-wrapper">
            <h2 className="content__title content__hr">
              Message Me
            </h2>
            <h3 className="content__subtitle center">
              With nice words
            </h3>
          </div>
          <div className="content__container text-left inline-block">
            <form className="col-2 contact__form">
              <div className="input__wrapper">
                <label>
                  First Name:
                  <Input className="input--half block" value={firstName} onChange={this.onFormChange('firstName')} />
                </label>
              </div>
              <div className="input__wrapper">
                <label className="label--half">
                  Last Name:
                  <Input className="input--half input--lasthalf block" value={lastName} onChange={this.onFormChange('lastName')} />
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
              <Button className="button--black font-two" onClick={this.onSendClick}>
                Send
              </Button>
              { sending ? (
                <p className="contact__message">
                  Sending...
                </p>
                ) : null
              }
              { emailSuccess ? (
                <p className="contact__message">
                  Message sent.
                </p>
                ) : null
              }
              { emailError ? (
                <p className="contact__message">
                  Send failed. Try email.
                </p>
                ) : null
              }
            </form>
            <div className="col-2 content__container relative inline-block text-center">
              <img className="image--boston" src={BostonImg} />
              <div className="contact__container">
                <div className="contact__item">
                  <i className="icon icon--location" />
                  <span className="contact__span">
                    Cambridge, MA
                  </span>
                </div>
                <div className="contact__item">
                  <i className="icon icon--mobile" />
                  <span className="contact__span">
                    404-513-0849
                  </span>
                </div>
                <div className="contact__item">
                  <i className="icon icon--beer" />
                  <span className="contact__span">
                    Find me at Westside Lounge and Cambridge Common
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
