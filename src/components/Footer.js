import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Travel With Us</h1>
                <p>Choose your destination</p>
            </div>
            <div>
                <a href='/'>
                    <i className='fa-brands fa-square-facebook'>
                    </i>
                    <i className='fa-brands fa-instagram-square'>
                    </i>
                    <i className='fa-brands fa-wordpress'>
                    </i>
                    <i className='fa-brands fa-twitter-square'>
                    </i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>
            <div>
                <h4>Trips Plan</h4>
                <a href='/'>Bagan</a>
                <a href='/'>TaungGyi</a>
                <a href='/'>Mandalay</a>
                <a href='/'>KyiteHteeYoe</a>
            </div>
            <div>
                <h4>Location</h4>
                <a href='/'>+959-762695080</a>
                <a href='/'>Mandalay Office</a>
                <a href='/'>Yangon Office</a>
                <a href='/'>Bagan Office</a>
            </div>
            <div>
                <h4>About Company</h4>
                <a href='/'>History</a>
                <a href='/'>Review</a>
                <a href='/'>About</a>
                <a href='/'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Footer