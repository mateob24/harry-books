import { useState } from 'react';
import { useEffect } from 'react';
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { GrCart } from "react-icons/gr";

export const Books = () => {

    const [books, setBooks] = useState([])

    async function getData () {
        const response = await fetch('./projects.json')
        const data = await response.json()
        console.log(data);
        setBooks(data);
    }

    useEffect(() => {
        getData()
    }, [])

    const styleState = (stock) => {
        if (stock >= 1) {
            return {
                color: 'rgb(171, 148, 20)',
                backgroundColor: 'rgb(202, 190, 150)',
            }
        }else {
            return {
                color: 'rgb(150, 0, 0)',
                backgroundColor: 'rgb(210, 150, 150)',
            }
        }
    }

    const [count, setCount] = useState(0)

  return (
    <>
        <section className='mt-8 mb-16 flex gap-10 flex-wrap items-center justify-center'>
            {books.map((book) => (
                <section key={book.id} className='card-book rounded-r-lg bg-zinc-300 drop-shadow-xl'>
                    <div>
                        <img src={book.img} className='h-96 object-cover' alt="book-cover"/>
                    </div>
                    <div className='w-3/4 h-full px-2 flex gap-24 flex-col justify-center bg-zinc-300'>
                        <p className='state-book self-end rounded-sm drop-shadow-md opacity-60' style={styleState(book.stock)}>
                            {book.stock >= 1 ? 'Disponible' : 'Agotado'}
                        </p>
                        <div className=''>   
                            <h2 className='text-xl font-extrabold bg-zinc-300'>{book.name}</h2>
                            <p className='font-semibold bg-zinc-300'>{book.author}</p>
                            <p className='font-semibold bg-zinc-300'>{book.category}</p>
                            <p className='font-extrabold bg-zinc-300'>${book.price}</p>
                        </div>
                        <div className="buttons bg-zinc-300">
                            <div className="flex items-center bg-zinc-300">
                                <button className='h-8 w-10 drop-shadow-md'>
                                    <FaPlus className='icons-count rounded-l-md bg-zinc-200'/>
                                </button>
                                <button className='h-8 w-10 drop-shadow-md'>
                                    <FaMinus className='icons-count rounded-r-md bg-zinc-200'/>
                                </button>
                            </div>
                            <button className='add-cart font-bold rounded-md drop-shadow-md bg-zinc-200'>Agregar ${book.price}
                                <span className='cart-box rounded-full'><GrCart className='cart'/></span>
                            </button>
                        </div>
                    </div>
                </section>
            ))}
        </section>
    </>
  )
}
