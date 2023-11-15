import "../ModalBooks/ModalBooks.css"
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { fetchData } from '../../DataService';
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { GrCart } from "react-icons/gr";

export const ModalBooks = ({isOpen, onClose}) => {

    const [books, setBooks] = useState([])

    async function getData() {
        try {
            const data = await fetchData('/projects.json')
            console.log(data);
            setBooks(data)
        } catch (error) {
            console.error('Error in Books:', error);
            throw error;
        }
    }

    useEffect(() => {
        getData();
      }, []);

    const styleState = (stock) => {
        if (stock >= 1) {
            return {
                color: 'rgb(171, 128, 20)',
                backgroundColor: 'rgb(202, 190, 150)',
                
            }
        }else {
            return {
                color: 'rgb(150, 0, 0)',
                backgroundColor: 'rgb(210, 150, 150)',
            }
        }

        
    }   

  return (
    <>
        <section id='modals-section'>
            {books.map((book) => (
                <section key={book.id} className='card-modal rounded-r-lg bg-zinc-300 drop-shadow-xl'>
                    <div>
                        <img src={book.img} className='h-96 object-cover' alt="book-cover"/>
                    </div>
                    <div className='info-modal bg-zinc-300'>
                        <div className="box-state-modal bg-zinc-300">
                            <p className='state-book drop-shadow-md' style={styleState(book.stock)}>
                                {book.stock >= 1 ? 'Disponible' : 'Agotado'}
                            </p>
                        </div>
                        <div className='dates-modal bg-zinc-300'>   
                            <h2 className='title-modal bg-zinc-300'>{book.title}</h2>
                            <div className="items-modal bg-zinc-300">
                                <p className="subtitle-item-modal bg-zinc-300">Autor</p>
                                <p className='item-date-modal bg-zinc-300'>{book.author}</p>
                                <p className="subtitle-item-modal bg-zinc-300">Idioma</p>
                                <p className='item-date-modal bg-zinc-300'>{book.language}</p>
                                <p className="subtitle-item-modal bg-zinc-300">Categoría</p>
                                <p className='item-date-modal bg-zinc-300'>{book.category}</p>
                                <p className='price-date-modal bg-zinc-300'>${book.price}</p>
                            </div>
                            {/* <button className='buy-modal drop-shadow-md' style={styleState(book.stock)}>Cómpralo
                                <span className='span-buy-book rounded-full'><BsMagic className="magic-book"/></span>
                            </button> */}
                        </div>
                        <div className="buttons-modal bg-zinc-300">
                            <div className="flex items-center bg-zinc-300">
                                <button className='h-8 w-10 drop-shadow-md'>
                                    <FaPlus className='icons-count rounded-l-md bg-zinc-200'/>
                                </button>
                                <button className='h-8 w-10 drop-shadow-md'>
                                    <FaMinus className='icons-count rounded-r-md bg-zinc-200'/>
                                </button>
                            </div>
                            <button className='add-cart rounded-md drop-shadow-md bg-zinc-200'>Agregar {count}
                                <span className='span-add-cart rounded-full'><GrCart className='cart'/></span>
                            </button>
                        </div>
                    </div>
                </section>
            ))}
        </section>
    </>
  )
}
