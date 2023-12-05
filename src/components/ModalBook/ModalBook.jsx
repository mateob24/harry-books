import "../ModalBook/ModalBook.css"
import { FaWindowClose } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export const ModalBook = ({children, isOpen, closeModal}) => {
    //Esta función se utiliza para evitar que el modal se cierre cuando se hace clic dentro de él.
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
