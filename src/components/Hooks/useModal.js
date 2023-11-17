import { useState } from "react";

export const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue)
    const [modalBookId, setModalBookId] = useState(null);
    
    const openModal = (bookId) => {
        setIsOpen(true);
        setModalBookId(bookId);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalBookId(null);
    };

    return [isOpen, modalBookId, openModal, closeModal]
}