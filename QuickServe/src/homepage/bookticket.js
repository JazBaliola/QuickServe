
import React from 'react';
import logo from './photo/logo.png';
import './bookticket.css';

export default function BookTicket() {

  const createBooking = () => {
    window.open('/createBooking', '_self');
  }

  const createTicket = () => {
    window.open('/createTicket', '_self');
  }
  
  return (
    
    <div >

    <div className='logo' >
    <img  src={logo} alt="Logo" />
    </div>
    
  
    <div >
            <input onClick={createBooking} className='optionbox' type="button" value="BOOKING"/>
            

            <input onClick={createTicket} className='optionboxTwo' type="button" value="TICKET"/>
            <p className='senOne'>Book any available <br></br>room at our <br></br>establishment</p>
            
            <p className='senTwo'>Send us a ticket <br></br>in-relation to the <br></br>issues you are receiving. </p>
    </div>
    </div>
  )
}
