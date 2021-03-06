import React from 'react';

function Tcard(props){
    //console.log(props);
    return(
  <>
    <div className="cards">
        <div className="card ">
          <img src={props.imgsrc} className="card_img"/>
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.href}>
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
  
    </> );
  }

  export default Tcard;