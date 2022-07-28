import React from "react";

function Card(props) {
  const obj = { width: "20rem" };
  return (
    <div className="card" style={obj}>
      <div className="card-body">
        <div className="border text-center">
        <h5 className="card-title">{props.texto||"No Text"}</h5>
        <h6>
          {props.pal && props.texto? <div>Es Palindromo!</div> : <div></div>}
        </h6>
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
