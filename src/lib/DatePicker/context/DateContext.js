import React, { createContext } from 'react';

const DateContext = createContext([null, () => {}]);
const DateContextProvider = ({ value, ...props }) => {
    return (
        <DateContext.Provider value={value}>
            {props.children}
        </DateContext.Provider>
    );
};

export { DateContext, DateContextProvider };
