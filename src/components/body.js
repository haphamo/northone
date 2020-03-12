import React from 'react'
import NewTaskForm from './newtaskform'

const styling = {
  display: 'flex',
  flexDirection: 'row',
  
}


export default function Body(){
  return(
    <div style={styling}>
      <NewTaskForm />
      
    </div>
  )
}