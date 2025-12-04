import React from 'react'
import comedies from './ComedyList'

function Comedy() {
  return (
    <div>{
      comedies.map((comedy,index)=>{
        <p key={index}>
            <p>{comedy.url}</p>
            <p>{comedy.name}</p>
            <p>{comedy.Director}</p>
            <p>{comedy.releasedate}</p>  
        </p>

      })}
    </div>
  )
}

export default Comedy
