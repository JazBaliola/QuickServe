import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './admin/Contents.css';
import './admin/Navbar.css';
import './admin/Sidebar.css';
import './homepage/index.css';
import './homepage/Login.css';
import './system/components/adminBooking/BurgerButton.css';
import './system/components/adminBooking/Header.css';
import './system/components/adminBooking/Main.css';
import './system/components/adminBooking/Table.css';
import './system/components/createBooking/CreateBooking.css';
import './system/components/ticketPanels/createTicketCSS.css';
import './system/components/ticketPanels/adminTicket.css';
import './system/components/ticketPanels/ticketSubmitted.css';
import Home from './homepage/Home';
import SignUp from './homepage/signup';
import BookTicket from './homepage/bookticket';
import AdminPanel from './admin/Admin_Panel';
import AdminTicket from './system/components/ticketPanels/adminTicket';
import CreateTicket from './system/components/ticketPanels/createTicket';
import TicketSubmitted from './system/components/ticketPanels/ticketSubmitted';
import GraphDashboard from './system/components/ticketPanels/dashboard';
import { AdminBooking } from './system/components/adminBooking/AdminBooking';
import CreateBooking from './system/components/createBooking/CreateBooking';


// Main Routes
function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} /> {/* Login / Homepage Page */}
         <Route path='/signup' element= {<SignUp />} />
         <Route path="/bookTicket" element={<BookTicket />} /> 
         <Route path="/adminPanel" element={<AdminPanel />} /> 
         <Route path='/viewTickets' element={<AdminTicket />} />
         <Route path='/createTicket' element={<CreateTicket />} />
         <Route path='/ticketSubmitted' element={<TicketSubmitted />} />
         <Route path='/dash' element={<GraphDashboard/>} />
         <Route path='/viewBookings' element={<AdminBooking />}/>
         <Route path='/createBooking' element={<CreateBooking />} />
      </Routes>     
    </Router>  
  );
}

export default App;
