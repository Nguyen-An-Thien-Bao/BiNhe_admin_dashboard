'use client';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { Divider } from '@mui/material';

function SearchBar(): React.ReactElement {
    const [searchInput, setSearchInput] = useState('');

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchInput('');
    };

    return (
        <div className="flex w-[400px] h-full py-4 items-center bg-white border rounded-md mr-10">
            <button className="px-4 text-black hover-effect">
                <FaSearch />
            </button>
            <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2, bgcolor: '#000' }} />
            <div className="w-full flex items-center">
                <input
                    value={searchInput}
                    onChange={(e) => handleChangeInput(e)}
                    placeholder="Search..."
                    className="text-black w-full outline-none bg-transparent pl-4"
                />
                {searchInput && <FiX className="text-black w-6 px-1 hover-effect" onClick={handleClearSearch} />}
            </div>
        </div>
    );
}

export default SearchBar;
