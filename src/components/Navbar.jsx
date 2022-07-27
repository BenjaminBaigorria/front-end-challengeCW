import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendText } from '../actions'

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
    <div>
        <form>
            <input type="text" name="text" onChange={(e)=>handleInput(e)}/>
            <input onClick={(e)=>handleSubmit(e)} type="submit" value="Enviar"/>
        </form>
    </div>
  )
}
