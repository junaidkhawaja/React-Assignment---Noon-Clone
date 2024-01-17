import React from 'react'
import image1 from '../assets/infocus-1.png'
import image2 from '../assets/infocus-2.png'

const Infocus = () => {
  return (
    <div className='infocus'>
      <h2>In focus</h2>
      <div className='infcous-image'>
        <img src={image1} />
      </div>
      <div className='infcous-image'>
        <img src={image2} />
      </div>
    </div>
  )
}

export default Infocus
