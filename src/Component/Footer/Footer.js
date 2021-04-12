import React, { Component } from "react";
import FooterItem from "./ListItem";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer mt-auto">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <FooterItem />
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright 2021 Food For Fitness, LLC. Web Design by</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
