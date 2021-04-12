import React from "react";
import axios from "axios";

export default class AnchorItem extends React.Component {
  render() {
    const navValue = this.props;
    return (
      <div className="col-lg-4 col-md-12">
        <div className="footer-info">
          {Object.keys(navValue).map((key) => (
            <>
              <h3>{navValue[key].instance.title}</h3>
              <ul>
                {Object.keys(navValue[key].value).map((subKey) => (
                  <li>
                    <a
                      href={"/" + navValue[key].value[subKey].slug}
                      dangerouslySetInnerHTML={{
                        __html: navValue[key].value[subKey].title,
                      }}
                    ></a>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    );
  }
}
