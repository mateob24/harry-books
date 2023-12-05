import "../Books/Books.css";
import { useState, useEffect } from "react";
import { ModalBook } from "../ModalBook/ModalBook";
import { fetchData } from "../../DataService";
import { BsMagic } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import { useModal } from "../Hooks/useModal.js";

export const Books = () => {
  const [isOpenModal, modalBookId, openModal, closeModal] = useModal(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const styleState = (stock) => { 
    if (stock >= 1) {
      return {
        color: "rgb(171, 148, 40)",
        backgroundColor: "rgb(171, 148, 40, 0.3)",
      };
    } else {
      return {
        color: "rgb(150, 0, 0)",
        backgroundColor: "rgb(150, 0, 0, 0.3)",
      };
    }
  };

  //PARA HACER USO DE LAS PROPIEDADES DE LA API EN LA VENTANA MODAL
  const selectedBook = books.find((book) => book.id === modalBookId);

  const [count, setCount] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const increment = () => {
    if (count >= 0 && count < selectedBook.stock) {
      setCount(count + 1);
      setSubtotal(subtotal + selectedBook.price) 
    }
  };

  const decrement = () => {
    if (count > 0 && subtotal > 0) {
      setCount(count - 1);
      setSubtotal(subtotal - selectedBook.price)
    }
  };

  const clean = () => {
    setCount(0)
    setSubtotal(0)
  }

  const modalAddToCart = (book) => {
    console.log(book);
    // Supongamos que la API tiene un endpoint para actualizar el stock.
    const updatedStock =
      //encadenamiento opcional (?.)
      books.find((book) => book.id === modalBookId)?.stock - count;

    // Llama a addToCart del contexto del carrito
    // addToCart(selectedBook, count);

    // Simular una solicitud a la API para actualizar el stock
    updateStockOnServer(modalBookId, updatedStock);

    // addToCart(selectedBook, count)

    // Cerrar la modal
    closeModal();

    setCount(0)
  };

  const updateStockOnServer = (bookId, newStock) => {
    console.log("Updating stock:", bookId, newStock);
    // Simular una solicitud a la API para actualizar el stock
    // Esto es solo un ejemplo y debe adaptarse a la lógica de tu API real
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        //en caso de que los 'id' sean iguales se creará un objeto con el mismo contenido 
        //del libro pero un nuevo 'stock' actualizado, sino devuelve el libro sin modificaciones
        book.id === bookId ? { ...book, stock: newStock } : book
      )
    );
  };

  return (
    <>
    {/* <CarritoProvider> */}

      <section id="books-section">
        {books.map((book) => (
          <section
            key={book.id}
            className="card-book rounded-r-lg bg-zinc-300 drop-shadow-xl"
          >
            <div>
              <img
                src={book.img}
                className="h-96 object-cover"
                alt="book-cover"
              />
            </div>
            <div className="info-book bg-zinc-300">
              <div className="box-state-book bg-zinc-300">
                <p
                  className="state-book drop-shadow-md"
                  style={styleState(book.stock)}
                >
                  {book.stock >= 1 ? "Disponible" : "Agotado"}
                </p>
              </div>
              <div className="dates-book bg-zinc-300">
                <h2 className="title-book bg-zinc-300">{book.title}</h2>
                <div className="items-book bg-zinc-300">
                  <p className="subtitle-item bg-zinc-300">Autor</p>
                  <p className="item-date-book bg-zinc-300">{book.author}</p>
                  <p className="subtitle-item bg-zinc-300">Idioma</p>
                  <p className="item-date-book bg-zinc-300">{book.language}</p>
                  <p className="subtitle-item bg-zinc-300">Categoría</p>
                  <p className="item-date-book bg-zinc-300">{book.category}</p>
                  <p className="subtitle-item bg-zinc-300">Precio</p>
                  <p className="price-date-book bg-zinc-300">${book.price}</p>
                </div>
                <button
                  onClick={() => openModal(book.id)}
                  className="buy-book drop-shadow-md"
                  style={styleState(book.stock)}
                >
                  Cómpralo
                  <span className="span-buy-book rounded-full">
                    <BsMagic className="magic-book" />
                  </span>
                </button>
              </div>
            </div>
          </section>
        ))}
      </section>

      <ModalBook
        isOpen={isOpenModal && modalBookId === selectedBook.id}
        closeModal={closeModal}
      >
        {selectedBook && (
          <section key={selectedBook.id} className="card-modal bg-zinc-300">
            <div className="h-full">
              <img
                src={selectedBook.img}
                className="img-modal object-cover"
                alt="book-cover"
              />
            </div>
            <div className="info-modal bg-zinc-300">
              <div className="box-state-modal bg-zinc-300">
                <p
                  className="state-modal drop-shadow-md"
                  style={styleState(selectedBook.stock)}
                >
                  {selectedBook.stock >= 1 ? "Disponible" : "Agotado"}
                </p>
              </div>
              <div className="dates-modal bg-zinc-300">
                <h2 className="title-modal bg-zinc-300">
                  {selectedBook.title}
                </h2>
                <div>
                  <p className="subtitle-item-modal bg-zinc-300">Sinopsis</p>
                  <p className="item-date-synopsis bg-zinc-300">
                    {selectedBook.synopsis}
                  </p>
                </div>
                <div className="flex">
                  <div className="items-modal bg-zinc-300">
                    <p className="subtitle-item-modal bg-zinc-300">Autor</p>
                    <p className="item-date-modal bg-zinc-300">
                      {selectedBook.author}
                    </p>
                    <p className="subtitle-item-modal bg-zinc-300">Idioma</p>
                    <p className="item-date-modal bg-zinc-300">
                      {selectedBook.language}
                    </p>
                    <p className="subtitle-item-modal bg-zinc-300">Categoría</p>
                    <p className="item-date-modal bg-zinc-300">
                      {selectedBook.category}
                    </p>
                  </div>
                  <div className="items-modal bg-zinc-300">
                    <p className="subtitle-item-modal bg-zinc-300">Stock</p>
                    <p className="item-num-modal bg-zinc-300">
                      {selectedBook.stock}
                    </p>
                    <p className="subtitle-item-modal bg-zinc-300">
                      N° páginas
                    </p>
                    <p className="item-num-modal bg-zinc-300">
                      {selectedBook.pages}
                    </p>
                    <p className="subtitle-item-modal bg-zinc-300">Publicado</p>
                    <p className="item-num-modal bg-zinc-300">
                      {selectedBook.date}
                    </p>
                  </div>
                </div>
                <div className="price-box-modal bg-zinc-300">
                  <div className="w-1/3">
                    <p className="subtitle-item-modal bg-zinc-300">Precio</p>
                    <p className="price-date-modal bg-zinc-300">
                      ${selectedBook.price}
                    </p>
                  </div>
                  <div className="w-1/3">
                    <p className="subtitle-item-modal bg-zinc-300">Subtotal</p>
                    <p className="price-date-modal bg-zinc-300">
                      ${subtotal}
                    </p>
                  </div>
                </div>
                <div className="buttons-modal bg-zinc-300">
                  <div className="flex items-center bg-zinc-300">
                    <button
                      onClick={decrement}
                      className="h-10 w-12 drop-shadow-md"
                    >
                      <FaMinus className="icons-count rounded-l-md bg-zinc-200" />
                    </button>
                    <button
                      onClick={clean}
                      className="h-10 w-12 drop-shadow-md"
                    >
                      <ImBin className="icons-count bg-zinc-200" />
                    </button>
                    <button
                      onClick={increment}
                      className="h-10 w-12 drop-shadow-md"
                    >
                      <FaPlus className="icons-count rounded-r-md bg-zinc-200" />
                    </button>
                  </div>
                  <button
                    onClick={() => modalAddToCart(selectedBook)}
                    className="add-cart rounded-md drop-shadow-md bg-zinc-200"
                  >
                    Comprar {count}
                    <span className="span-add-cart rounded-full">
                      <IoCart className="cart" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </ModalBook>
      {/* </CarritoProvider> */}
    </>
  );
};
