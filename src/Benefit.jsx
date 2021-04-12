import React, { Component, Fragment } from 'react';
import Bcard from "./Bcards";
import Bdata from './Bdatas';

function Benefit(){
    // console.log(props);
    return(
    <Fragment>
        <h1 className="heading_style">Your Key Benefit for Fitness Food</h1>
        {Bdata.map((item,key)=>{return  <Bcard imgsrc={item.imageUrl} title=
        {item.title} href={item.link} key={key} />})}
      </Fragment> );
  }

  export default Benefit;

  //Bdata.map(Bcard);
   /* {Bdata.map((val) => {return (<Bcard imgsrc={item.imgsrc} title= {item.title} href={item.links} /> ));}} */