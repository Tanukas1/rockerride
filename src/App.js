import React from 'react';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import GetCabs from './Components/GetCabs';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contacts';
import Login from './Components/Login';
import Registration from './Components/Registration';
import ForgotPassword from './Components/ForgotPassword';
import MobileBookCabs from './Components/Mobile/MobileBookCabs';
import Googlemap from './Components/Mobile/Googlemap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/get-caps" element={<GetCabs />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Registration" element={<Registration/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route path="/MobileBookCabs" element={<MobileBookCabs />} />
          <Route path="/googleMap" element={<Googlemap/>} />
          
          </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
