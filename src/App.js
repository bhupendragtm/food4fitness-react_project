import React, { Component } from "react";
import "./index.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import Menu1 from "./Menu";
import Menu from "./Component/Menu.jsx";
import Post from "./Component/Post.jsx";
// import Work from './Work.jsx';
import Tmon from "./Tmon.jsx";
import Benefit from "./Benefit.jsx";
import Soc_data from "./Soc.jsx";
// import Footer from './Footer.jsx';
// import Post from './Component/Post.txt';
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
