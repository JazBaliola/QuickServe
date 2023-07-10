import './components/ticketPanels/createTicketCSS.css';
import './components/ticketPanels/adminTicket.css';
import './components/ticketPanels/ticketSubmitted.css';
import CreateTicket from './components/ticketPanels/createTicket';
import AdminTicket from './components/ticketPanels/adminTicket';
import TicketSubmitted from './components/ticketPanels/ticketSubmitted';
import { AdminBooking } from './components/adminBooking/AdminBooking';
import { CreateBooking } from './components/createBooking/CreateBooking';
import GraphDashboard from './components/ticketPanels/dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/admin' element= {<AdminTicket />} ></Route>
        <Route path='/' element= {<CreateTicket />} ></Route>
        <Route path='/ticketSubmitted' element= {<TicketSubmitted />} ></Route>
        <Route path='/dash' element= {<GraphDashboard/>} ></Route>
        <Route path='/book' element={<AdminBooking />}></Route>
        <Route path='/createBooking' element= {<CreateBooking />} ></Route>
       </Routes>
       </BrowserRouter> 
       </div>  
  );
}

export default App;
