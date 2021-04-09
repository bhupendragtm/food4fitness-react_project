import React from 'react';
import axios from 'axios';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        // Don't do this!
        this.state ={
            menus: []
        }
       }

  componentDidMount() {
    axios.get(`https://wp.wdnexus.com/wp-json/menus/v1/menus/menu-1-header`)
      .then(res => {
        this.setState({ 
            menus: [res, ...this.state.menus]
        });
      })
     
  }

  render() {
    return (
      <ul>
        { this.state.menus.map (menu => 
        <div key={menu.data}>
          {console.log(menu.data.items)}
          {menu.data.items.map( item =>
            <li><div key={item.ID}>{item.title}</div></li>
            )}
        </div>
        )}
        </ul>
        )
      }
      }; 

// export default Menu