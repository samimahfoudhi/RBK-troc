import React, { useState } from 'react';
import './App.css';

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [adress, setAdress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userName || !adress || !phoneNumber || !email || !password) {
            setError('All fields are required.');
        } else {
            setError('');
            try {
                const response = await fetch('https://your-api-url.com/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userName,
                        adress,
                        phoneNumber,
                        email,
                        password
                    }),
                });
                const data = await response.json();
                if (data.success) {
                    alert('Registration successful. Please sign in.');
                } else {
                    setError(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                setError('Failed to register. Please try again.')
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="userName">User Name</label>
                    <input 
                        type="text" 
                        id="userName" 
                        name="userName" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="adress">Adress</label>
                    <input 
                        type="text" 
                        id="adress" 
                        name="adress" 
                        value={adress} 
                        onChange={(e) => setAdress(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="text" 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;