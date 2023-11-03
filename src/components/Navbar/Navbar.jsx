import React from 'react'
// import { FaCartPlus } from "react-icons/fa";
// import { BsBookHalf } from "react-icons/bs"
import { VscRepo } from "react-icons/vsc";
import { GrCart } from "react-icons/gr";

export const Navbar = ({count}) => {
  return (
    <>
        <nav className='harry-nav w-full flex justify-between items-center bg-zinc-300 drop-shadow-xl'>
            <div className='ml-14 flex items-center'>
                <a href='/' className='flex items-center text-3xl font-extrabold bg-zinc-300'>HarryBooks<VscRepo className='mt-2 ml-2 text-4xl bg-zinc-300'/></a>
            </div>
            <a href="" className='mr-14 flex p-3 rounded-full relative items-center bg-zinc-200'>
                <GrCart className='text-4xl bg-zinc-200'/>
                <p className='h-6 w-6 pl-2 bottom-11 left-11 absolute rounded-full font-bold bg-zinc-400'>{count}</p>
            </a>
        </nav>
    </>
  )
}
