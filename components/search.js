import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const searchOnKeyDown = (event, value) => {
        if (event.code === "Enter" || event.keyCode === 13) {
            onSearch(value);
        }
    }

    return (
        <div className="flex justify-end items-center relative mt-70">
            <input
                placeholder="...جستجو کنید"
                className="input bg-white focus:border-white focus:outline-none text-right pr-44"
                onKeyDown={e => searchOnKeyDown(e, term)}
                onChange={e => setTerm(e.target.value)}
            />
            <img src="/search.svg" className="absolute ml-4 mr-18" alt="Search Icon" />
        </div>

    );
}

export default Search;
