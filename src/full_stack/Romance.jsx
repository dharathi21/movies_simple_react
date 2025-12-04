import React from 'react'
import romances from './RomanceList'

function Romance() {
  return (
    <div>{
      romances.map((action,index)=>{
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

export default Romance
