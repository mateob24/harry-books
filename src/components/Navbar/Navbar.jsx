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
              <p className='harry-title flex items-center font-extrabold text-red-800 bg-zinc-300'>Harry<span className="harry-title-span bg-zinc-300">Books</span></p>
            </div>
            <ul href='/' className='w-96 flex justify-center bg-zinc-300'>
              <NavLink to='/'><img src="./gafas-harry-potter.png" className="harry-glasses bg-zinc-300" alt="harry-glasses"/></NavLink>
            </ul>
            <div className='w-80 mr-14 flex gap-6 justify-end bg-zinc-300'>
              <a href="" className="flex p-4 items-center rounded-full bg-zinc-200">
                <VscRepo className='icons-nav bg-zinc-200'/>
              </a>              
              <a href='' className='flex grow-0 p-4 rounded-full relative items-center bg-zinc-200'>
                <GrCart className='icons-nav bg-zinc-200'/>
                <p className='count-nav text-lg text-center font-extrabold absolute rounded-full text-zinc-300 bg-red-800'>2</p>
              </a>
            </div>
        </nav>
    </>
  )
}
