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
                color: 'rgb(150, 128, 10)',
                backgroundColor: 'rgb(202, 190, 150)',
            }
        }else {
            return {
                color: 'rgb(150, 0, 0)',
                backgroundColor: 'rgb(210, 150, 150)',
            }
        }
    }

    const [, setCount] = useState(0)

  return (
    <>
        <section className='my-6 flex gap-10 flex-wrap items-center justify-center relative'>
            {books.map((book) => (
                <section key={book.id} className='card-book h-96 flex items-center rounded-lg bg-zinc-300 drop-shadow-xl'>
                    <div>
                        <img src={book.img} className='h-96 object-cover rounded-l-lg' alt="book-cover"/>
                    </div>
                    <div className='w-3/4 h-full px-2 flex gap-28 flex-col justify-center bg-zinc-300'>
                        <p className='w-24 px-1 self-end font-bold text-center rounded-lg drop-shadow-md opacity-60' style={styleState(book.stock)}>{book.stock >= 1 ? 'Disponible' : 'Agotado'}</p>
                        <div className=''>   
                            <h2 className='text-xl font-extrabold bg-zinc-300'>{book.name}</h2>
                            <p className='font-semibold bg-zinc-300'>{book.author}</p>
                            <p className='font-bold text-red-800 bg-zinc-300'>${book.price}</p>
                        </div>
                        <div className="buttons flex items-center justify-center gap-16 bg-zinc-300">
                            <div className="flex items-center bg-zinc-300">
                                <button className='h-9 w-10 drop-shadow-md'>
                                    <FaPlus className='p-1 h-9 w-9 rounded-l-lg bg-zinc-400'/>
                                </button>
                                <button className='h-9 w-10 drop-shadow-md'>
                                    <FaMinus className='p-1 h-9 w-9 rounded-r-lg bg-zinc-400'/>
                                </button>
                            </div>
                            <button className='h-9 w-52 flex items-center justify-between font-bold rounded-lg drop-shadow-md bg-zinc-400'>Agregar ${book.price}
                                <span className='h-9 w-8 p-1 flex items-center rounded-r-lg bg-zinc-200'><GrCart className='h-9 w-6 rounded-r-lg bg-zinc-200'/></span>
                            </button>
                        </div>
                    </div>
                </section>
            ))}
        </section>
    </>
  )
}
