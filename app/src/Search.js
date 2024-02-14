// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bg from './bg.png';
import './Search.css'; // Import CSS file
function Search() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [randomBooks, setRandomBooks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchRandomBooks();
    }, []);

    const fetchRandomBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/books/random');
            setRandomBooks(response.data);
        } catch (error) {
            setError('Error fetching random books');
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/books/search?q=${query}`);

            if (response.status === 200) {
                setSearchResults(response.data);
            } else {
                setError('Failed to fetch data');
            }
        } catch (error) {
            setError('Error fetching data');
        }
    };

    return (
        <div className="container">
            <div className='search-bar'>
            <h1>Book Search</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter title, author, or keyword"
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button></div>
            {error && <p>{error}</p>}
            <div className="random-books">
            {randomBooks.map((book) => (
                    <div key={book._id} className="book-item">
                        <img src={book.frontPageUrl} alt={`Front page of ${book.title}`} className="book-image" />
                        <p className="book-title">Title: {book.title}</p>
                        <p className="book-author">Author: {book.author}</p>
                    </div>
                ))}
                   <div className="book-item">
                        <img src={bg}  className="book-image" />
                        <p className="book-title">Title : physics</p>
                        <p className="book-author">Author: ram</p>
                    </div> 
                    <div className="book-item">
                        <img src={bg}  className="book-image" />
                        <p className="book-title">Title : physics</p>
                        <p className="book-author">Author: ram</p>
                    </div> 
                    <div className="book-item">
                        <img src={bg}  className="book-image" />
                        <p className="book-title">Title : physics</p>
                        <p className="book-author">Author: ram</p>
                    </div> 
                    <div className="book-item">
                        <img src={bg}  className="book-image" />
                        <p className="book-title">Title : physics</p>
                        <p className="book-author">Author: ram</p>
                    </div> 
                    <div className="book-item">
                        <img src={bg}  className="book-image" />
                        <p className="book-title">Title : physics</p>
                        <p className="book-author">Author: ram</p>
                    </div> 
                    <div className="book-item">
                        <img src={bg}  className="book-image" />
                        <p className="book-title">Title : physics</p>
                        <p className="book-author">Author: ram</p>
                    </div> 
                                        

            </div>
        </div>
    );
}

export default Search;
