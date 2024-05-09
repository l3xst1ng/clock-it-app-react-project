import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
    const [isCheckIn, setIsCheckIn] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: ''
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data, e.g., send it to backend for authentication
        // For now, just console.log the form data
        console.log(formData);
        // After successful sign-in, toggle to user profile
        setIsCheckIn(true);
    };

    return (
        <div className={`container ${isCheckIn ? 'active' : ''}`}>
            {isCheckIn ? (
                <div className='user-profile-card right-margin'>
                    <div className='gradient'></div>
                    <div className='UserProfilerofile-down'>
                        <img src="" alt="" />
                        <div className='profile-info'>
                            <p><strong>First Name:</strong> {formData.firstName}</p>
                            <p><strong>Last Name:</strong> {formData.lastName}</p>
                            <p><strong>Role:</strong> {formData.role}</p>
                        </div>
                    </div>
                    <div className='profile-button'><a href="mailto:">Contact</a></div>
                </div>
            ) : (
                <div className="form-container sign-in">
                    <form onSubmit={handleSubmit}>
                        <h1>Check In</h1> 
                        <span>or use your email and password</span>
                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                        <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} />
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
                        <h1>Greetings to our esteemed workers</h1>
                        <p>Register with your personal details to use all site features.</p>
       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;


