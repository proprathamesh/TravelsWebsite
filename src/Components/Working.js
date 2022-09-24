import React from 'react'
import './working.css'
import form from './pass-fill.svg'
import tick from './tick.svg'
import call from './call.svg'

export default function Working() {
  return (
    <div className='box'>
        <h3>Book your ride in 3 easy steps.</h3>
        <div className="steps">
            <div className="stepBox">
                <img src={form} alt="" />
                <p>Fill the form above to get in touch with us.</p>
            </div>
            <hr />
            <div className="stepBox">
                <img src={tick} alt="" />
                <p>Submit your information to book your ride</p>
            </div>
            <hr />
            <div className="stepBox">
                <img src={call} alt="" />
                <p>Our team will call you to confirm your ride</p>
            </div>
        </div>
    </div>
  )
}
