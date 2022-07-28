import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendText } from '../actions'
import  "../styler.css"

export default function Navbar() {
  //hooks--ganchos
  const dispatch=useDispatch()
  const [text, setText] = useState({text:""})


  //handleFunctions -- funciones controladoras
  function handleInput(e){
    e.preventDefault()
    setText({
        ...text,
        [e.target.name]: e.target.value
    })
    console.log(text)
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(sendText(text.text))
  }



  return (
    <div className='navv'>
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <div className='navbar-nav mx-auto'>
        <form className="d-flex">
            <input className="form-control me-2" type="text" name="text" onChange={(e)=>handleInput(e)}/>
            <button className="btn btn-outline-light" onClick={(e)=>handleSubmit(e)} type="submit">Enviar</button>
        </form>
        </div>
      </div>
    </nav>
    </div>
  )
}
