import React from "react";
import "../styler.css";

function Card(props) {
  return (
    <div className="container">
      
        <div className="Cardd">
        <div className="card-body">
          <div className="text-center">
            <h4 className="display-5">{props.texto || "No Text"}</h4>
            <h5>
              {props.pal && props.texto ? (
                <div>Es Palindromo!</div>
              ) : (
                <div>No es Palindromo!</div>
              )}
            </h5>
          </div>
        </div>
        </div>
      
    </div>
  );
}

export default Card;

/*<div classNameName="card" style={obj}>
      <div classNameName="card-body">
       <h6>{props.texto}{props.pal? (<div>Es Palindromo!</div>):(<div>No es Palindromo!</div>)}</h6>
      </div>
    </div> */
