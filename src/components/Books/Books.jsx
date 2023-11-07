import { useState } from 'react';
import { useEffect } from 'react';

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

    const styleStock = (stock) => {
        if (stock >= 1) {
            return {
                color: 'rgb(0, 130, 0)',
                backgroundColor: 'rgb(170, 210, 170)',
            }
        }else {
            return {
                color: 'rgb(250, 0, 0)',
                backgroundColor: 'rgb(280, 190, 190)',
            }
        }
    }

  return (
    <>
        <section className='my-6 flex gap-10 flex-wrap items-center justify-center relative'>
            {books.map((book) => (
                <section key={book.id} className='card-book h-96 flex items-center justify-between rounded-xl bg-zinc-300 drop-shadow-xl'>
                    <div>
                        <img src={book.img} alt="" className='h-96 object-cover rounded-l-lg'/>
                    </div>
                    <div className='w-3/4 h-full px-2 flex flex-col justify-between bg-zinc-300'>
                        <p className='w-24 px-1 self-end font-bold text-center rounded-lg' style={styleStock(book.stock)}>{book.stock >= 1 ? 'Disponible' : 'Agotado'}</p>
                        <div className=''>   
                            <h2 className='text-xl font-bold bg-zinc-300'>{book.name}</h2>
                            <p className='font-semibold bg-zinc-300'>{book.autor}</p>
                            <p className='font-semibold bg-zinc-300'>${book.price}</p>
                        </div>
                    </div>
                </section>
            ))}
        </section>
    </>
  )
}
