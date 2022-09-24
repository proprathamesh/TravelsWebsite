import React from 'react'
import './services.css'
import outstation from './service2.jpg'
import wedding from './wedding.jpg'

export default function Services() {
  return (
    <div className='bg'>
      <div className="heading1">Our Services</div>
      <div className="lines">
        <hr className="at3" />
        <hr className="at4" />
      </div>
      <div className="services">
        <div className="serbox"><img src={outstation} alt="" /><h3>Outstation</h3></div>
        <div className="serbox"><img src={wedding} alt="" /><h3>Wedding</h3></div>
      </div>
    </div>
  )
}
