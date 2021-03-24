import React from 'react';
import Wcard from "./Wcards";
import Sdata from './sdata';

function Work(props){
    // console.log(props);
    return(
        <>
        <h1 className="heading_style">List of Top 3 Netflix Series 2020</h1>
      <Wcard
        className="randome_class"
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        href={Sdata[0].Sdata}
      />
      <Wcard
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        href={Sdata[1].links}
      />
      <Wcard
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        href={Sdata[2].links}
      />
      <Wcard
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        href={Sdata[3].links}
      />
      <Wcard
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        href={Sdata[4].links}
      />
      </> );
  }

  export default Work;