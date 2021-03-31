import React from 'react';

function Wcard(props){
    //console.log(props);
    return(
  <>
    <div className="cards">
        <div className="card ">
          <img src={props.imgsrc} className="card_img"/>
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
          </div>
        </div>
      </div>
  
    </> );
  }

  export default Wcard;