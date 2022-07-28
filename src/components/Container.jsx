import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import "../styler.css"

function Container() {
  const alltext=useSelector(state=>state.texts)
  return (
    <div className='containerr' data-testid="cont-1">
        {alltext?.map((e,index)=>{return !e.error?
        (<Card  key={index} texto={e.text} pal={e.palindrome}/>):
        (<Card  key={index} texto={e.error} pal={e.palindrome}/>)})}
    </div>
  )
}

export default Container