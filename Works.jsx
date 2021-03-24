import React from 'react';
import ReactDOM from 'react-dom';
import Wcard from "./Wcard";
import './index.css';
import Wdata from './Wdata';

//console.log(Wdata[0].sname);

ReactDOM.render(
  <>
  <h1 className="heading_style">List of Top 3 Netflix Series 2020</h1>
<Wcard
  className="randome_class"
  imgsrc={Wdata[0].imgsrc}
  title={Wdata[0].title}
  sname={Wdata[0].sname}
  href={Wdata[0].links}
/>,
<Wcard
  imgsrc={Wdata[1].imgsrc}
  title={Wdata[1].title}
  sname={Wdata[1].sname}
  href={Wdata[1].links}
/>,
<Wcard
  imgsrc={Wdata[2].imgsrc}
  title={Wdata[2].title}
  sname={Wdata[2].sname}
  href={Wdata[2].links}
/>,
</>);

export default Wcard;
