import React from 'react';

import { Link } from 'react-router-dom';
function Navbar({ username, onLogout }) {

    return (
        <nav style={{ backgroundColor: '#333', color: '#fff', padding: '2px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h3>My App</h3>
            </div>
            <div>
            <button  style={{ padding: '5px 10px',marginRight:'20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '7px', cursor: 'pointer' }}>Profile</button>

                <button onClick={onLogout} style={{ padding: '5px 10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '7px', cursor: 'pointer' }}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;
