import { useState } from "react";

export const Cart = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
        
        <div className="modal">
            {open && (
                <div className="modal-content">
                    <h2>Titulo de la ventana modal</h2>
                    <p>Contenido de la ventana modal</p>
                    <button className="text-xl" onClick={() => setOpen(false)}>Cerrar</button>
                </div>
            )}
        </div>
    </>
  )
}
