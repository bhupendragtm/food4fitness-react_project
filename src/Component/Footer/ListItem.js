import React from "react";
import axios from "axios";
import AnchorItem from "./AnchorItem";
import ContactInformation from "./ContactInformation";

export default class FooterItems extends React.Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios.get(`https://wp.wdnexus.com/wp-json/wp/v2/widgets`).then((res) => {
      this.setState({
        menus: [res.data, ...this.state.menus],
      });
    });
  }

  render() {
    return (
      <>
        {this.state.menus.map((menu) => (
          <>
            {Object.keys(menu).map((menuItem) => (
              <>
                {menu[menuItem].map((itm) => ({
                  ...(itm.type == "nav_menu" ? (
                    <AnchorItem navItem={itm} />
                  ) : itm.type == "text" ? (
                    <ContactInformation navItem={itm} />
                  ) : (
                    ""
                  )),
                }))}
              </>
            ))}
          </>
        ))}
      </>
    );
  }
}
