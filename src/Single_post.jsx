import React from 'react';
import Post_card from "./Post_cards";
import Post_data from './Post_data';


function Single_post(){
    // console.log(props);
    return(
        <>
        <h1 className="heading_style">Single Post</h1>
        {Post_data.map((item)=>{
          return  <Post_card pname={item.pname} imgsrc={item.imgsrc} title={item.title} href={item.links}/>
        })}
    
      </> );
  }

  export default Single_post;