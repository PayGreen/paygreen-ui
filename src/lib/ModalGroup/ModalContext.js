import { createContext, useContext } from 'react';

export const ModalContext = createContext();

export const useModal = () => {
    return useContext(ModalContext);
};
