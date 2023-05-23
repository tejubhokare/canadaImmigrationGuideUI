import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Do something with the search term, e.g. send it to a backend API
        console.log(`Search term: ${searchTerm}`);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="search">Search:</label>
            <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
