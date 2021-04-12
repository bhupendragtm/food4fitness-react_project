import React from "react";
import axios from "axios";

export default class FooterItems extends React.Component {
  render() {
    const navValue = this.props;
    return (
      <div className="col-lg-2 col-md-5 column-sm">
        <div className="footer-item footer-item__inventory">
          {Object.keys(navValue).map((key) => (
            <>
              <h3>{navValue[key].instance.title}</h3>
              <div
                className="contact-information"
                dangerouslySetInnerHTML={{
                  __html: navValue[key].instance.text,
                }}
              ></div>
            </>
          ))}
        </div>
      </div>
    );
  }
}
