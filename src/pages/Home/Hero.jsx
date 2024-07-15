import React from 'react'
import profileImg from "../../assets/simons.jpg"
import '../main.css'

function Hero() {
  return (
    <div className="profile">
        <div className="profile-info">
          <h1>Hi, am John, Creative Technologist</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            rerum fugiat voluptate dolorem reprehenderit corrupti modi facere
            debitis placeat reiciendis.
          </p>
          <a href="">download resume</a>
        </div>
        <div className="profile-image">
          <img src={profileImg} alt="profile picture" />
        </div>
      </div>
  )
}

export default Hero