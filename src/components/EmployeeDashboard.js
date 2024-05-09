import React, { useState, useEffect } from "react";
import AttendanceTable from "./AttendanceTable";
import UserProfile from "./UserProfile";
import './EmployeeDashboard.css'

const EmployeeDashboard = ({firstName}) => {
  const [attendanceData, setAttendanceData] = useState({
    attendanceStatus: "",
    date: "",
    arrivalTime: ""
  });
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
  

    // Fetching user data from the JSON server
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
            user => user.firstName=== firstName
        )
        if (user){
            setUserName(user.firstName + " " + user.lastName);
         setUserRole(user.role);
         const attenda = {...attendanceData, attendanceStatus: user.attendanceStatus, date: user.date, arrivalTime: user.arrivalTime}
         console.log(attenda);
         setAttendanceData(attenda)
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [firstName]);
console.log(attendanceData);
  return (
    <div className="employee-dashboard">
      <h1>Employee Dashboard</h1>
      <UserProfile userName={userName} userRole={userRole} />
      <AttendanceTable attendanceData={attendanceData} />
    </div>
  );
};

export default EmployeeDashboard;