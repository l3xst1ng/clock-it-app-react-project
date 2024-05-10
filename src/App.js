import LoginPage from './components/LoginPage';
import EmployeeDashboard from './components/EmployeeDashboard.js';
import LandingPage from './components/LandingPage.js';
import About from './components/About.js';
import WorkplaceGuidelines from './components/WorkplaceGuidelines.js';
import Contact from './components/Contact.js';
import './App.css';
import {  useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default App;

export default App;
=======
function App() {
  const [firstName, setFirstName] = useState("")


  


    return (
      <Router>
        <Routes>
          < Route path='/' element={<LandingPage/>}/>
          <Route path='/LoginPage' element={<LoginPage setFirstName={setFirstName} firstName={firstName}/>}/>
          <Route path='/DashBoard' element={<EmployeeDashboard firstName={firstName}/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/WorkplaceGuidelines' element={<WorkplaceGuidelines/>}/>
          <Route path='/Contacts' element={<Contact/>}/>
        </Routes>
      </Router>
    );

  

}

export default App;

