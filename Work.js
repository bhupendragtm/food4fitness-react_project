import React from 'react';
import Wcard from "./Wcards";
import Wdata from './Wdata';

function Work(props){
    // console.log(props);
    return(
        <>
        <h1 className="heading_style">How It Works</h1>
      <Wcard
        className="randome_class"
        imgsrc={Wdata[0].imgsrc}
        title={Wdata[0].title}
        href={Wdata[0].links}
      />
      <Wcard
        imgsrc={Wdata[1].imgsrc}
        title={Wdata[1].title}
        href={Wdata[1].links}
      />
      <Wcard
        imgsrc={Wdata[2].imgsrc}
        title={Wdata[2].title}
        href={Wdata[2].links}
      />
      <Wcard
        imgsrc={Wdata[3].imgsrc}
        title={Wdata[3].title}
        sname={Wdata[3].sname}
        href={Wdata[3].links}
      />
      <Wcard
        imgsrc={Wdata[4].imgsrc}
        title={Wdata[4].title}
        href={Wdata[4].links}
      />
      </> );
  }

  export default Work;