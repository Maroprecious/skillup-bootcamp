import { createContext, useState, useContext } from "react";

export const ModalContext = createContext({
  isModalOpen: false,
  setIsModalOpen: () => {},
});
export const ModalProvider = ({children}) => {
    const [ isModalOpen, setIsModalOpen] = useState(false)
    const value = {isModalOpen, setIsModalOpen};
    return(
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)