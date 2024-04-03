import { Link, NavLink } from "react-router-dom";
import { BsEmojiWink } from "react-icons/bs";

const Nav = () => {
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-green-400 shadow-red-200 shadow-md fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content text-xl mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <Link to="/"><h1 className="btn btn-ghost text-4xl">Ha Ha HaHa</h1></Link>
    {/* <a className="btn btn-ghost text-xl">Email Password</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
    <h2 className="text-4xl text-red-600"><BsEmojiWink /></h2>
  </div>
</div>
    );
};

export default Nav;