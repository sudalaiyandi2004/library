// Due.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Due.css';

function Due() {
    const [dueList, setDueList] = useState([]);

    useEffect(() => {
        const fetchDueList = async () => {
            try {
                const response = await axios.get('/api/due');
                setDueList(response.data);
            } catch (error) {
                console.error('Error fetching due list:', error);
            }
        };

        fetchDueList();
    }, []);

    return (
        <div>
            <h1>Due List</h1>
            <table className="due-table">
                <tbody>
                    <tr className='th'>
                        <th>Book</th>
                        <th>Date</th>
                    </tr>
                    {dueList.map(item => (
                        <tr key={item._id}>
                            <td className='io'>{item.book}</td>
                            <td className='io'>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Due;
