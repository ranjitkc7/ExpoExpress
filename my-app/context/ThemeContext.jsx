import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleTheme = (selected) => {
        setMode(selected);
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            {children} 
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
