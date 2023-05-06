import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
    const [modal, setModal] = useState(null);
    const showModal = (content) => {
        setModal(content)
    }

    const hideModal = () => {
        setModal(null)
    }

    return (
        <ModalContext.Provider value={{ modal, showModal, hideModal }}>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = () => {
    return useContext(ModalContext)
}
  
export { ModalContextProvider, useModal }




