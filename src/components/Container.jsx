import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function Container() {
  const alltext=useSelector(state=>state.texts)
  return (
    <div>
        {alltext?.map((e,index)=>{return (<Card key={index} texto={e.text} pal={e.palindrome}/>)})}
    </div>
  )
}

export default Container