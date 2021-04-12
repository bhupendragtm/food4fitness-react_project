import React, { Component } from "react";
import "../../index.css";
import Menu from "../../Menu";
import Work from "../../Work.jsx";
import Tmon from "../../Tmon.jsx";
import Benefit from "../../Benefit.jsx";
import Soc_data from "../../Soc.jsx";
import Post from "../../Component/Menu.jsx";
import Footer from "../Footer/Footer";
export class Frontpage extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <Post />
        <Work />
        <Soc_data />
        <Tmon />
        <Benefit />
        <Footer />
      </>
    );
  }
}
