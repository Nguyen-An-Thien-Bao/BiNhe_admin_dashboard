'use client';

import React, { useEffect, useState } from 'react';
import { SidebarContext } from '@/context/SidebarContext';

function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setIsOpen(true);
        }
    }, []);

    return <SidebarContext.Provider value={{ isOpen, handleOpenSidebar }}>{children}</SidebarContext.Provider>;
}

export default SidebarProvider;
