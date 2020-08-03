import { createContext } from 'react';

const DateContext = createContext([{}, () => {}]);
const DateContextProvider = props => {
    return <DateContext.Provider>{props.children}</DateContext.Provider>;
};

export { DateContext, DateContextProvider };
