'use client';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function DarkMode() {
    const { setTheme, resolvedTheme } = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOpenPanel = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePanel = () => {
        setAnchorEl(null);
    };

    const handleOpenDarkMode = () => {
        setTheme('dark');
        setAnchorEl(null);
    };

    const handleOpenLightMode = () => {
        setTheme('light');
        setAnchorEl(null);
    };

    return (
        <div className="block mx-auto absolute left-2/4 bottom-6 -translate-x-2/4">
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpenPanel}
                className="text-white"
            >
                <span>
                    {/* {resolvedTheme === 'dark' ? (
                        <BsFillSunFill className=" text-xl " />
                    ) : (
                        <BsFillMoonFill className=" text-xl " />
                    )} */}
                    Mode
                </span>
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClosePanel}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleOpenDarkMode}>Dark Mode </MenuItem>
                <MenuItem onClick={handleOpenLightMode}>Light Mode </MenuItem>
            </Menu>
        </div>
    );
}

export default DarkMode;
