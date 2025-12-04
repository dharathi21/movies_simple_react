import React from 'react'
import Actions from './ActionList'

function Action() {
  return (
    <div>{
      Actions.map((action,index)=>{
        <p key={index}>
            <p>{action.url}</p>
            <p>{action.name}</p>
            <p>{action.Director}</p>
            <p>{action.releasedate}</p>  
        </p>

      })}
    </div>
  )
}

export default Action
