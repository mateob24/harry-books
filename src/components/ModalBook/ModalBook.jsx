import "../ModalBook/ModalBook.css"
import { FaWindowClose } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export const ModalBook = ({children, isOpen, closeModal}) => {
    const modalContainerClick = (e) => e.stopPropagation();

    return (
        <>
            <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
                <div className="modal-container bg-zinc-200" onClick={modalContainerClick}>
                    <button className="modal-close" onClick={closeModal}><FaWindowClose className="bg-zinc-300"/></button>
                    {children}
                </div>
            </article>
        </>
    )
}
