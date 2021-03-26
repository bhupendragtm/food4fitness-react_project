import React from 'react';
import Wcard from "./Wcards";
import Wdata from './Wdata';

function Work(props){
    // console.log(props);
    return(
        <>
        <h1 className="heading_style">How It Works</h1>
        {Wdata.map((item)=>{
          return <Wcard imgsrc={item.imgsrc} title={item.title} href={item.links}/>
          })}
      </> );
  }

  export default Work;