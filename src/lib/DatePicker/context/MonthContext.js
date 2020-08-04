import React, { createContext } from 'react';

const MonthContext = createContext([null, () => {}]);
const MonthContextProvider = ({ value, ...props }) => {
    return (
        <MonthContext.Provider value={value}>
            {props.children}
        </MonthContext.Provider>
    );
};

export { MonthContext, MonthContextProvider };
