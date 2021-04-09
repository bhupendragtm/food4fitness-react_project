import React from 'react';
import Tcard from "./Tcards";
import Tdata from './Tdata';

function Tmon(props){
  //   console.log(props);
    return(
        <>
        <h1 className="heading_style">Your Testimonial Goes Here</h1>
        {Tdata.map((item)=>{return <Tcard sname={item.sname} imgsrc={item.imgsrc} title={item.title} href={item.links}/>})}
      </> );
  }

  export default Tmon;