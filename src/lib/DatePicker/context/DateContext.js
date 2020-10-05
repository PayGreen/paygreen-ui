import React, { createContext } from 'react';

const DateContext = createContext([null, () => {}]);
const DateContextProvider = ({ value, children }) => {
    return (
        <DateContext.Provider value={value}>
            {children}
        </DateContext.Provider>
    );
};

export { DateContext, DateContextProvider };
