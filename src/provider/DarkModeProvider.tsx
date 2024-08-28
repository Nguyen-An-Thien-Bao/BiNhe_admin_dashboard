import React from 'react';
import { ThemeProvider } from 'next-themes';

function DMThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}

export default DMThemeProvider;
