import React from 'react';
import Scard from "./Soc_cards";
import Sdata from './Soc_data';


function Soc(props){
    // console.log(props);
    return(
        <>
        <h1 className="heading_style">NetFlix Series</h1>
      <Scard
        // className="randome_class"
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        href={Sdata[0].links}
      />,
      <Scard
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        href={Sdata[1].links}
      />,
      <Scard
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        href={Sdata[2].links}
      />,
      <Scard
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        href={Sdata[3].links}
      />,
      <Scard
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        href={Sdata[4].links}
      />,
      </> );
  }

  export default Soc;
