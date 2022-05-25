import React, { Suspense } from 'react';
import './App.css';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import 'flowbite';
import Login from './Components/Login';
import EditProfile from './Components/EditProfile';
import StepsRegister from './Components/StepsRegister';
import Travels from './pages/Travels';
import MyTravels from './pages/MyTravels';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} exact />
          {/* <Route path="/register" element={<div dir='rtl'><Register /></div>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/travles" element={<Travels />} />
          <Route path="/mytravles" element={<MyTravels />} />
          <Route path="/steps/1" element={<StepsRegister />} />
          {/* <Route path="/404" element={<Undifined />} /> */}
          {/* <Route path="/dashboard" element={<div dir='rtl'><Dashboard /></div>} /> */}
          {/* <Route path="/dashboard/wallets" element={<div dir='rtl'><Wallets /></div>} /> */}
        </Routes>
      </Router>
    </Suspense>
  </>
);