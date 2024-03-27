
import { useState } from "react";
import BooksTittle from "../Components/BooksTittle";
import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {
  const [tabIndex,setTabIndex] = useState(0);
  return (
    <div>
      <BooksTittle></BooksTittle>
      THIS IS FROM LISTED BOOK.....


      <div role="tablist" className="tabs tabs-lifted w-56">
  <Link to={''} role="tab" onClick={()=> setTabIndex(0)} className={` ${tabIndex===0?'tab tab-active text-blue-600 font-semibold text-xl ':'tab text-xl '} `}>Read</Link>
  <Link to={'wish-to-read'} role="tab" onClick={()=> setTabIndex(1)} className={` ${tabIndex===1?'tab-active tab text-blue-600 font-semibold text-xl ':'tab text-xl '}`}>Wish To List</Link>
  
</div>

<Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;