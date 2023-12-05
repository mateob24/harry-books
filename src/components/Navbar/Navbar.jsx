import { NavLink } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";
// import { GiWhiteBook } from "react-icons/gi";
import { IoCart } from "react-icons/io5";
import "../Navbar/Navbar.css";

export const Navbar = () => {

  return (
    <>
      <nav className="harry-nav w-full flex justify-between items-center bg-zinc-300 drop-shadow-xl">
        <div className="w-80 ml-14 flex items-center bg-zinc-300">
          <p className="harry-title bg-zinc-300">
            Harry<span className="harry-title-span bg-zinc-300">Books</span>
          </p>
        </div>
        <NavLink to="/" className="rounded-full bg-zinc-300">
          <img
            src="./gafas-harry-potter.png"
            className="harry-glasses rounded-full bg-zinc-300 hover:bg-zinc-200 hover:drop-shadow-md"
            alt="harry-glasses"
          />
        </NavLink>
        <div className="w-80 mr-14 flex gap-6 justify-end bg-zinc-300">
          <NavLink
            onClick={() => (window.location.hash = "#books-section")}
            className="icon-box rounded-full bg-zinc-200 drop-shadow-md"
          >
            <GiSpellBook className="icons-nav bg-zinc-200" />
          </NavLink>
          <NavLink
            to={"/cart"}
            className="icon-box rounded-full relative bg-zinc-200 drop-shadow-md"
          >
            <IoCart className="icons-nav bg-zinc-200" />
            <p className="point-icon-nav rounded-full">
              <img className="thunder" src="./flash.png" alt="thunder" />
            </p>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
