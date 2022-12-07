
import React from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Profile from './components/Profile';
import Login from './pages/Login'

function App() {
  return (
   <BrowserRouter>
   
   <div>
     
     <Routes>
      <Route path="/" element={<Login />} />
      
      <Route path="/profile" element={<Profile />} />
     
     </Routes>
    
    </div>
   </BrowserRouter>
   
  );
}

export default App;

