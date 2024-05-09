import React, { useState } from 'react';
import './LoginPage.css';
import {  useNavigate } from 'react-router-dom';

function LoginPage({firstName, setFirstName}) { 
    
    const navigate = useNavigate()
    const [isCheckIn, setIsCheckIn] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        date:'',
        arrivalTime: '',
        attendanceStatus: ''
    });

    const handleSignUpClick = () => {
        setIsCheckIn(true);
    };

    const handleLoginClick = () => {
        setIsCheckIn(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFirstName(formData.firstName);
        console.log(firstName);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Capture the current time as the arrival time
        const datestring = new Date();
        const currentTime = datestring.toLocaleTimeString();
        const currentDate = new Date().toLocaleDateString();
        console.log(currentDate)
        const updatedFormData = { ...formData, arrivalTime: currentTime, date: currentDate};
        

        // Determine the attendance status based on the arrival time
        const attendanceStatus = getAttendanceStatus(currentTime);
        updatedFormData.attendanceStatus = attendanceStatus;

        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedFormData)
        })
            .then(r => {
                if (!r.ok) {
                    console.error("Failed to post data to server");
                }
            })
            .catch((err) => {
                console.error(err);
            });

        // Process form data, e.g., send it to backend for authentication
        // For now, just console.log the form data
        console.log(updatedFormData);

        // After successful sign-in, toggle to user profile
        setIsCheckIn(true);
        setFormData(updatedFormData);
    };

    // Function to determine the attendance status based on the arrival time
    const getAttendanceStatus = (arrivalTime) => {
        // Assuming the expected arrival time is 9:00 AM
        const expectedArrivalTime = new Date();
        expectedArrivalTime.setHours(9, 0, 0, 'AM');

        const currentDateTime = new Date();
        const [hours, minutes] = arrivalTime.split(':');
        currentDateTime.setHours(hours, minutes, 0);

        if (currentDateTime <= expectedArrivalTime) {
            return 'On Time';
        } else {
            return 'Late';
        }
    };

    function displayDashboard(){

      
       navigate('/DashBoard')
    }


    return (
        <div className={`container ${isCheckIn ? 'active' : ''}`}>
            {isCheckIn ? (
                <div className='user-profile-card right-margin'>
                    <div className='gradient'></div>
                    <div className='UserProfilerofile-down'>
                        <img src="data:image/png;base64,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" alt="" />
                        <div className='profile-info'>
                            <p><strong>First Name:</strong> {formData.firstName}</p>
                            <p><strong>Last Name:</strong> {formData.lastName}</p>
                            <p><strong>Role:</strong> {formData.role}</p>
                        </div>
                       </div> 
                       <button  id='dashboard' onClick={displayDashboard}>Proceed to DashBoard</button>
                    
                </div>
            ) : (
                <div className="form-container sign-in">
                    <form onSubmit={handleSubmit}>
                        <h1>Check In</h1>
                        
                        <input required type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                        <input required type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                        <input required type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} />
                        <a href="#">Enter your Details and the your role in the company</a>
                        <button type="submit">Check In</button>
                    </form>
                </div>
            )}
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>The user profile will contain all your details.</p>
                        <button className={`hidden ${isCheckIn ? '' : 'active'}`} onClick={handleLoginClick}>Go back</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Greetings to our esteemed employees</h1>
                        <p>Register with your personal details to use all site features.</p>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default LoginPage;



