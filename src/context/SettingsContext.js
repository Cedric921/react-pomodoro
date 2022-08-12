import React, { createContext } from 'react';

export const SettingsContext = createContext();

const SettingsContextProvider = ({ children }) => {
	return (
		<SettingsContext.Provider value={{}}>{children}</SettingsContext.Provider>
	);
};

export default SettingsContextProvider;
