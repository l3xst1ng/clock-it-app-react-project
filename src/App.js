import LoginPage from './LoginPage';
import Dashboard from './components/EmployeeDashboard';
import LandingPage from './components/LandingPage.js';
import './App.css';

import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage.js';
import './App.css';
import {  useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [firstName, setFirstName] = useState("")


  


    return (
      <Router>
        <Routes>
          < Route path='/' element={<LandingPage/>}/>
          <Route path='/LoginPage' element={<LoginPage setFirstName={setFirstName} firstName={firstName}/>}/>
          <Route path='/DashBoard' element={<Dashboard firstName={firstName}/>}/>
        </Routes>
      </Router>
    );

  

}

export default App;

export default App;