import React, { createContext } from 'react';

const MonthContext = createContext([null, () => {}]);
const MonthContextProvider = ({ value, children }) => {
    return (
        <MonthContext.Provider value={value}>
            {children}
        </MonthContext.Provider>
    );
};

export { MonthContext, MonthContextProvider };
