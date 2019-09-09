/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';
import Decor from './images/banner-decor.png';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div id="homePage" >
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="uk-section home-banner" >
          <div className="uk-container">
            <div className="wrapper">
              <div className="home-banner__columns" >
                <div className="home-banner__column" >
                  <h1 className="title title--w-medium home-banner__title">
                    Comprehensive digital
                    <br/>
                    <span className="decor decor--underline"> solutions</span>
                  </h1>
                  <p className="home-banner__body" >
                    Fusce nec tellus sed augue semper porta. Mauris massa.
                    <br/>
                    <br/>
                    Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra
                  </p>
                  <button className="uk-button uk-button-primary home-banner__explore-btn" >Explore Now</button>
                </div>
                <div className="home-banner__column home-banner__column--right" >
                  <img className="decor decor--img" src={Decor} />
                </div>
              </div>
            </div>
            </div>
        </div>
        <div className="uk-section about-banner" >
          <div className="uk-container">
            <div className="wrapper">
              <h1 className="title title--w-medium about-banner__title">
                <span className="decor decor--section-title">
                  About
                </span>
              </h1>
              <div className="about-banner__columns" >
                <div className="about-banner__column">

                </div>
                <div className="about-banner__column">
                  <p className="about-banner__body">
                    Fusce nec tellus sed augue semper porta. Mauris massa.
                    Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                  </p>
                  <div className="about-banner__skills">
                    <div className="badge about-banner__skills-item">
                      <h1 className="title title--w-bold" >
                        B
                      </h1>
                    </div>
                    <div className="badge about-banner__skills-item">
                      <h1 className="title title--w-bold" >
                        F
                      </h1>
                    </div>
                    <div className="badge about-banner__skills-item">
                      <h1 className="title title--w-bold" >
                        D
                      </h1>
                    </div>
                    <div className="about-banner__skills-item">
                      <ul className="list">
                        <li className="list__item" >Aliquam eu risus</li>
                        <li className="list__item" >Vestibulum auctor</li>
                        <li className="list__item" >Nunc dignissim</li>
                      </ul>
                    </div>
                    <div className="about-banner__skills-item">
                      <ul className="list">
                        <li className="list__item" >Fusce pellentesque</li>
                        <li className="list__item" >Integer vitae libero</li>
                        <li className="list__item" >Cras iaculis</li>
                      </ul>
                    </div>
                    <div className="about-banner__skills-item">
                      <ul className="list">
                        <li className="list__item" >Cras ornare tristique</li>
                        <li className="list__item" >Praesent placerat</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {

};
