'use client';
import React, { useState } from 'react';

function Users(): React.ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    // console.log('>>>', isOpen);
    const handleToggle = (): void => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div>
            <h1>User Table</h1>
            <button onClick={handleToggle}>toggle</button>
            <div className="flex h-[500px]">
                <div
                    className={`${
                        isOpen ? 'w-[300px] translate-x-0 z-0' : 'w-0 -translate-x-full -z-10'
                    } bg-green-800 ease-in-out duration-500`}
                >
                    hello
                </div>
                <div className={` w-full bg-orange-200 dark:bg-yellow-100 p-5`}>world</div>
            </div>
        </div>
    );
}
export default Users;
