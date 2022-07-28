import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function Container() {
  const alltext=useSelector(state=>state.texts)
  return (
    <div>
        {alltext?.map((e,index)=>{return !e.error?
        (<Card class="accordion" key={index} texto={e.text} pal={e.palindrome}/>):
        (<Card class="accordion" key={index} texto={e.error} pal={e.palindrome}/>)})}
    </div>
  )
}

export default Container