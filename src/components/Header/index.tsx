import React from 'react';
import SearchBar from './SearchBar';
import User from './User';
import NavButton from './NavButton';

function Header(): React.ReactElement {
    return (
        <header className="sticky text-white flex justify-between md:justify-end items-center p-4 px-[27px] h-[80px] top-0 left-0 rounded-md right-0 shadow-md shadow-customize bg-primary-green dark:bg-primary-black">
            <NavButton />
            <SearchBar />
            <User />
        </header>
    );
}
export default Header;
