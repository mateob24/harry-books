import { NavLink } from "react-router-dom";
import { TbMailShare } from "react-icons/tb"
import "../Footer/Footer.css"

export const Footer = () => {
  return (
    <>
        <footer className="harry-footer w-full flex justify-between items-center bg-zinc-300">
            <div className="w-80 ml-14 flex items-center bg-zinc-300">
                <p className="font-bold bg-zinc-300">&copy;Derechos reservados MB | 2023</p>
            </div>
            <NavLink to='/' className="rounded-full bg-zinc-300">
                {/* <img src="./gafas-harry-potter.png" className="harry-glasses-f rounded-full bg-zinc-200" alt="harry-glasses"/> */}
              <p className='harry-title-f bg-zinc-300'>Harry<span className="harry-title-span bg-zinc-300">Books</span></p>
            </NavLink>
            <div className="w-80 mr-14 flex items-center justify-end bg-zinc-300">
                <NavLink to='mailto:bernalmateoa@gmail.com?Subject=Interesad@s%20en%20el%20desarrollador' className="flex p-4 rounded-full bg-zinc-200 drop-shadow-md">
                    <TbMailShare className='icons-footer bg-zinc-200'/>
                </NavLink> 
            </div>
        </footer>
    </>
  )
}
