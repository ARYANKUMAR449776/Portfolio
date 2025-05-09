import React from 'react'
import './Homepage.css'
import { assets } from '../../assets/assets'
const Homepage = () => {
  return (
    <div className='homepageContainer'>
      <div >
        <p className='homepage-phrase'>COMPILING DREAMS INTO DEPLOYABLE REALITIES</p>
      </div>
      <div className='homepageImages'>
        <img className="homeImageDimensions" src={assets.MainBodyImage1} alt="BodyImage1" />
        <img className="homeImageDimensions" src={assets.MainBodyImage2} alt="BodyImage2" />
      </div>


    </div>
  )
}

export default Homepage
