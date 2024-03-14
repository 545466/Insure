import React, { useState } from 'react'
import image from './Image'
const Different = () => {
  const [diff, setdiff] = useState(image)
  return (
    <div className='different'>
      <div className='line' ></div>
      <h1 className='diffh'>We're different</h1>
      <div className="diffs">
      {
        diff.map((diffs) =>(
          <div key={diffs} className='diff'>
          <img src={diffs.img}/>
          <h1>{diffs.h1}</h1>
          <p>{diffs.text}</p>
          </div>
        ))
      }
      </div>
      <div className="find">
        <h1>Find out more <br /> about how we work</h1>
        <p className='view'>HOW WE WORK</p>
      </div>
    </div>
  )
}

export default Different
