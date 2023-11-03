import { useState } from 'react';
import { useEffect } from 'react';
import { BsPlusLg } from "react-icons/bs";

export const Books = ({eventClick}) => {

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

    const [count, setCount] = useState(30);

    const handleAdd = () => setCount(count+1)
    const decrement = () => setCount(count-1)

  return (
    <>
        <h2></h2>
        <section className='my-6 flex gap-10 flex-wrap items-center justify-center relative'>
            {books.map((book) => (
                <section key={book.id} className='cart-book h-96 flex items-center justify-between rounded-xl bg-zinc-300 drop-shadow-xl'>
                    <div>
                        <img src={book.img} alt="" className='h-96 object-cover rounded-l-lg'/>
                    </div>
                    <div className='w-3/4 px-4 bg-zinc-300'>
                        <h2 className='text-xl font-bold bg-zinc-300 text-center'>{book.name}</h2>
                        <h3 className='bg-zinc-300 font-semibold'>{book.autor}</h3>
                        <p className='bg-zinc-300 font-semibold'>Existencias: {book.quanty}</p>
                        <p className='bg-zinc-300 font-semibold'>Stock: {count}</p>
                        <div>
                            <button onClick={decrement}>Agregar</button>
                            <button onClick={handleAdd}>Eliminar</button>
                        </div>
                        <p className='bg-zinc-300 font-semibold'>${book.price}</p>
                    </div>
                </section>
            ))}
        </section>
    </>
  )
}
