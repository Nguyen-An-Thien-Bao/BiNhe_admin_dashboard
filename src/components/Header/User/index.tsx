import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function User() {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt="Alex" src="./" className="bg-primary-nude w-full aspect-square" />
        </Stack>
    );
}
