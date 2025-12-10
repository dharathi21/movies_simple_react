import React from 'react'
import Actions from './ActionList'

function Action() {
  return (
    <div className='box1'>{
      Actions.map((action,index)=>(
        <p className="detail" key={index}>
            <img src={action.url}></img>
            <p>{action.name}</p>
            <p>{action.Director}</p>
            <p>{action.releasedate}</p>  
        </p>

      ))}
    </div>
  )
}

export default Action
