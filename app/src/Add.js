import React, { useState } from 'react';
import axios from 'axios';
function Add() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = async(e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        try {
            const response = await axios.post('/api/login', { username, password });
            console.log(response.data.message);
        } catch (error) {
            setError('Invalid credentials');
        }
    
        setUsername('');
        setPassword('');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleLogin} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2>Login</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    style={{ width: '100%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ width: '100%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
                />
                <input 
                    type="submit" 
                    value="Login" 
                    style={{ width: '100%', padding: '10px', margin: '8px 0', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} 
                />
            </form>
        </div>
    );
}

export default Add;
