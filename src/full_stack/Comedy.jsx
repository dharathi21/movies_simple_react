import React from 'react'
import comedies from './ComedyList'

function Comedy() {
  return (
    <div>{
      comedies.map((comedy,index)=>(
        <p className="box" key={index}>
            <img src={comedy.url}></img>
            <p>{comedy.name}</p>
            <p>{comedy.Director}</p>
            <p>{comedy.releasedate}</p>  
        </p>

      ))}
    </div>  )
}

export default Comedy
