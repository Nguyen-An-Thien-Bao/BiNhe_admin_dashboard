'use client';

import React, { useEffect, useState } from 'react';
import { SidebarContext } from '@/context/SidebarContext';

function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(0);

    const handleOpenSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setIsOpen(true);
        }
        setWindowSize(window.innerWidth);
    }, []);

    return (
        <SidebarContext.Provider value={{ isOpen, handleOpenSidebar, windowSize }}>{children}</SidebarContext.Provider>
    );
}

export default SidebarProvider;
