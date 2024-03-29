import { NavLink } from "react-router-dom";


const Navber = () => {

  const links =  <>
   
    <li><NavLink to='/' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold':''}>Home</NavLink></li>
    <li> <NavLink to='/listed-book' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold':''}>Listed Books</NavLink></li>
    <li> <NavLink to='/pages-to-read' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold':''}>Pages To Read</NavLink></li>
    <li> <NavLink to='/categories' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold':''}>Category</NavLink></li>
    <li><NavLink to='/authors' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold':''}>Authors</NavLink></li>
    
                 </>
   
   
    
   

  return (
    <div className="navbar bg-base-100 flex flex-col md:flex-row gap-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="-right-10 flex items-center text-blue-700 hover:scale-105 hover:text-[#23BE0A] "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55K6zFqaw8UfwqshBgAiEBOvuaDHCukfqWw&s" className="w-10 lg:w-24" alt="" /><h2 className=" text-2xl md:text-4xl font-serif font-extrabold"><span>Ink</span>Voy</h2></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-8 font-semibold menu-horizontal px-1 text-blue-600">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-blue-600 text-white mr-2 font-bold">Sign In</a>
        <a className="btn bg-[#23BE0A] text-white font-bold">Sign Up</a>
      </div>
    </div>
  );
};

export default Navber;