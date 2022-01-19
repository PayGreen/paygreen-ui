import { createContext, useContext } from 'react';

export const DropdownContext = createContext();

export const useDropdown = () => {
    return useContext(DropdownContext);
};
