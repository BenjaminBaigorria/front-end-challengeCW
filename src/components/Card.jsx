import React from 'react'


function Card(props) {
  return (
    <div>
      <h4>{props.texto}{props.pal? (<div>Es Palindromo!</div>):(<div>No es Palindromo!</div>)}</h4>
    </div>
  )
}

export default Card