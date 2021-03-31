import React from 'react';
import Scard from "./Soc_cards";
import Sdata from './Soc_data';


function Soc(props){
    // console.log(props);
    return(
        <>
        <h1 className="heading_style">NetFlix Series</h1>
        {Sdata.map((item)=>{
          return  <Scard  imgsrc={item.imgsrc} title={item.title} href={item.links}/>
        })}
    
      </> );
  }

  export default Soc;