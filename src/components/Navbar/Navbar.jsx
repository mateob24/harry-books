// import { FaCartPlus } from "react-icons/fa";
// import { BsBookHalf } from "react-icons/bs"
import { VscRepo } from "react-icons/vsc";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";

export const Navbar = ({count}) => {
  return (
    <>
        <nav className='harry-nav w-full flex justify-between items-center bg-zinc-300 drop-shadow-xl'>
            <div className='w-80 ml-14 flex items-center bg-zinc-300'>
              <p className='harry-title flex items-center text-4xl font-extrabold text-red-600 bg-zinc-300'>Harry<span className="harry-title-span bg-zinc-300">Books</span></p>
            </div>
            <ul href='/' className='w-96 flex justify-center bg-zinc-300'>
              <NavLink to='/'><img src="./gafas-harry-potter.png" className="harry-glasses bg-zinc-300" alt="harry-glasses"/></NavLink>
            </ul>
            <div className='w-80 mr-14 flex gap-6 justify-end bg-zinc-300'>
              <a href="" className="flex p-3 items-center rounded-full bg-zinc-200">
                <VscRepo className='text-4xl bg-zinc-200'/>
              </a>              
              <a href='' className='flex grow-0 p-3 rounded-full relative items-center bg-zinc-200'>
                <GrCart className='text-4xl bg-zinc-200'/>
                <p className='h-6 w-6 bottom-11 left-11 absolute text-center font-bold rounded-full bg-red-500'>{count}</p>
              </a>
            </div>
        </nav>
    </>
  )
}
