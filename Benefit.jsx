import React from 'react';
import Bcard from "./Bcards";
import Bdata from './Bdatas';

function Benefit(){
    // console.log(props);
    return(
        <>
        <h1 className="heading_style">Your Key Benefit for Fitness Food</h1>
        {Bdata.map((item)=>{return <Bcard imgsrc={item.imgsrc} title={item.title} href={item.links} />})}
      </> );
  }

  export default Benefit;