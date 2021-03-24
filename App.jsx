import React from 'react';
import Card from "./Cards";
import Sdata from './sdata';

function App(props){
    // console.log(props);
    return(
        <>
        <h1 className="heading_style">List of Top 3 Netflix Series 2020</h1>
      <Card
        className="randome_class"
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        href={Sdata[0].Sdata}
      />
      <Card
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        href={Sdata[1].links}
      />
      <Card
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        href={Sdata[2].links}
      />
      <Card
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        href={Sdata[3].links}
      />
      <Card
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        sname={Sdata[4].sname}
        href={Sdata[4].links}
      />
      </> );
  }

  export default App;