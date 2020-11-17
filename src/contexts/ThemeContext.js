import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

function ThemeProvider(props) {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};
	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
