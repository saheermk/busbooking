import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import BusTickets from './components/pages/BusTickets';
import TrainTickets from './components/pages/TrainTickets';
import Bookings from './components/pages/Bookings';
import Account from './components/pages/Account';
import Help from './components/pages/Help';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
          <Route path='/' element={<BusTickets/>}/>
          <Route path='/train' element={<TrainTickets/>}/>
          <Route path='/bookings' element={<Bookings/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/account' element={<Account/>}/>
      </Routes>
    </Router>
  );
}

export default App;
