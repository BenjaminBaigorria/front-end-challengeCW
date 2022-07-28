import React from "react";
import "../styler.css";

function Card(props) {
  return (
    <div className="container">
      
        <div className="Cardd">
        <div className="card-body">
          <div className="text-center">
            <h4 className="display-6">{props.texto || "No Text"}</h4>
            <div>
              {props.pal && props.texto ? (
                <h4 >Palindrome!</h4>
              ) :  props.texto? (<h4>Not Palindrome!</h4>):(<h4>...</h4>) }
                
            </div>
          </div>
        </div>
        </div>
      
    </div>
  );
}

export default Card;

/*<div classNameName="card" style={obj}>
      <div classNameName="card-body">
      style="width: 18rem;
       <h6>{props.texto}{props.pal? (<div>Es Palindromo!</div>):(<div>No es Palindromo!</div>)}</h6>
      </div>
    </div> */
