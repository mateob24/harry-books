import { useState } from "react";
import { VscRepo } from "react-icons/vsc";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import "../Navbar/Navbar.css"

export const Navbar = () => {


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
        <nav className='harry-nav w-full flex justify-between items-center bg-zinc-300 drop-shadow-xl'>
            <div className='w-80 ml-14 flex items-center bg-zinc-300'>
              <p className='harry-title text-red-800 bg-zinc-300'>Harry<span className="harry-title-span bg-zinc-300">Books</span></p>
            </div>
            <NavLink to='/' className="rounded-full bg-zinc-300">
              <img src="./gafas-harry-potter.png" className="harry-glasses rounded-full bg-zinc-300 hover:bg-zinc-200 hover:drop-shadow-md" alt="harry-glasses"/>
            </NavLink>
            <div className='w-80 mr-14 flex gap-6 justify-end bg-zinc-300'>
              <NavLink onClick={() => window.location.hash = '#books-section'} className="icon-box rounded-full bg-zinc-200 drop-shadow-md">
                <VscRepo className='icons-nav bg-zinc-200'/>
              </NavLink>              
              <button onClick={handleOpen} className='icon-box rounded-full relative bg-zinc-200 drop-shadow-md'>
                <GrCart className='icons-nav bg-zinc-200'/>
                <p className='count-nav rounded-full bg-red-800'>2</p>
              </button>
            </div>
        </nav>
    </>
  )
}
