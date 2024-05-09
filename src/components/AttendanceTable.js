//Table.js
import React, { useState, useEffect } from "react";
import './AttendanceTable.css'

const AttendanceTable = ({attendanceData}) => {
//   const [attendanceData, setAttendanceData] = useState([]);

//   useEffect(() => {
//     // Fetch attendance data from the JSON server
// //     fetch("http://localhost:3000/users")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setAttendanceData(data);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching attendance data:", error);
// //       });
// //   }, []);

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to format the arrival time
  const formatTime = (timeString) => {
    return new Date(2000-01-01T${timeString}).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div>
      <h2 id='attendance-header'>Attendance Records</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Arrival Time</th>
            <th>Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>{attendanceData.date}</td>
              <td>{attendanceData.arrivalTime}</td>
              <td>{attendanceData.attendanceStatus}</td>
            </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;