import LoginPage from "./components/LoginPage";
import EmployeeDashboard from "./components/EmployeeDashboard";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/LoginPage"
          element={
            <LoginPage setFirstName={setFirstName} firstName={firstName} />
          }
        />
        <Route
          path="/EmployeeDashBoard"
          element={<EmployeeDashboard firstName={firstName} />}
              />
              <Route
                  path="/About"
              element= {<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
