import React from 'react';

function Bcard(props){
    //console.log(props);
    return(
  <>
    <div className="cards">
        <div className="card ">
          <img src={props.imageUrl} className="card_img"/>
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <a href={props.href} target= "_blank">
              <button>Read Now</button>
            </a>
          </div>
        </div>
      </div>
  
    </> );
  }

  export default Bcard;