import React from 'react'
import "./Trip.css"
import TripData from './TripData'
import trip1 from '../assets/trip1.jpg'
import trip2 from '../assets/trip2.jpg'
import trip3 from '../assets/trip3.jpg'

const Trip = () => {
  return (
    <div className='trip'> 
        <h1>Trip Packages</h1>
        <p>Choose your desire package to connect with us</p>
        <div className='trip-card'>
            <TripData
            img={trip1}
            heading = 'Balloons over Bagan '
            text="Get the best views of Bagan’s 8,000 temples and pagodas, 
                  all of which are nigh on impossible to visit on land, 
            during an extra-special hot-air balloon flight. 
             "/>
            <TripData
            img={trip2}
            heading='Half trip to Bagan'
            text='For those who do not have much time to travel around but want to explore the most highlighted features of this ancient land as much as possible, 
            nothing better than the amazing Bagan half day tours – the wonderful and short version of the classic Bagan tours. 
            '/>
            <TripData
            img={trip3}
            heading='Bagan and Mount Popa Private Tour (2 Days)'
            text='With thousands of pagodas in Bagan, it can be overwhelming to know where to start. 
                 Benefit from taking a full-day tour with your own private guide who takes you to celebrated temples like Ananda Temple,
                  Dhammayangyi Temple, and Shwezigon Pagoda.'/>
        </div>
        </div>
  )
}

export default Trip