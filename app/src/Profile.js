import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from './user.jpg';
import './Profile.css'; // Import CSS file for styling

function Profile({ userId }) {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`/api/users/${userId}`);
                setUserData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [userId]);

    return (
        <div>
            <h1>User Profile</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="profile-container">
                    <img src={user} alt="User" className="profile-image" />
                    <table className="profile-table">
                        <tbody>
                        <tr className='th'>
                                <th>Details</th>
                                <th>Information</th>
                            </tr>
                            <tr>
                                <th className='io'>User ID:</th>
                                <th className='io'>{userData.userId}</th>
                            </tr>
                            <tr>
                                <th className='io'>Name:</th>
                                <th className='io'>{userData.name}</th>
                            </tr>
                            <tr>
                                <th className='io'>Phone:</th>
                                <th className='io'>{userData.phone}</th>
                            </tr>
                            <tr>
                                <th className='io'>Books Borrowed:</th>
                                <th className='io'>{userData.borrowedBooks}</th>
                            </tr>
                            <tr>
                                <th className='io'>Total Fine:</th>
                                <th className='io'>${userData.totalFine}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Profile;
