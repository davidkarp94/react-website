import { Button } from './Button'
import '../App.css';
import React from 'react'
import './HeroSection.css'
import Video from './videos/video1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <video src={Video} type='video/mp4' autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>

      <div className="hero-btns">

            <Button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'
            >
                  Get Started
            </Button>

            <Button 
            className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'
            >
                  Watch Trailer <i className='far fa-play-circle' />
            </Button>

      </div>

    </div>
  )
}

export default HeroSection