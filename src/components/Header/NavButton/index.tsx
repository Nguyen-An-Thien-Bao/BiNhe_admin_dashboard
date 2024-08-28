'use client';

import React from 'react';
import { FaAlignLeft } from 'react-icons/fa';
import { useContext } from 'react';
import { SidebarContext } from '@/context/SidebarContext';

function NavButton(): React.ReactElement {
    const { handleOpenSidebar } = useContext(SidebarContext);

    return <FaAlignLeft className="md:absolute md:left-[27px] text-xl hover-effect" onClick={handleOpenSidebar} />;
}

export default NavButton;
