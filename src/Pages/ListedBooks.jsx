import { FaAngleDown } from "react-icons/fa";

import BooksTittle from "../Components/BooksTittle";
import { Link, Outlet } from "react-router-dom";
import { getReadBooks} from "../utility/BookList";
import { useEffect, useState } from "react";





const ListedBooks = () => {
  const [readBooks , setReadBooks] = useState([]);

  const [displayReadBooks,setDisplayReadBooks] = useState([]);


  
  const handleSortBy = input =>{

    if(input === "Sort By"){
      setDisplayReadBooks(readBooks);
    }
    else if (input === "Rating"){
      let descendingByRating =readBooks.sort((a,b)=>{
        return b.rating - a.rating ;
      })
      setDisplayReadBooks(descendingByRating);
     
    }
    else if(input === "Publish Year"){
      let descendingByPublishYear = readBooks.sort((a,b)=>{
        return b.yearOfPublishing - a.yearOfPublishing ;
      })
      setDisplayReadBooks(descendingByPublishYear);
    }
    else if(input === "Number Of Pages"){
      let descendingByPages = readBooks.sort((a,b)=>{
        return b.totalPages - a.totalPages ;
    })
    setDisplayReadBooks(descendingByPages);
    }
    
   

  }
 
  useEffect(()=>{
    const allReadBooks = getReadBooks();
    setReadBooks(allReadBooks);
    
  },[ displayReadBooks])

  

  const [tabIndex,setTabIndex] = useState(0);
  return (
    <div>
      <BooksTittle></BooksTittle>

     <div className="flex justify-center items-center my-8">
     <details className="dropdown">
  <summary className="m-1 btn bg-[#23BE0A] px-8 py-4 rounded-full text-white font-bold">Sort By <FaAngleDown /></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    {/* <li onClick={()=>handleSortBy('Sort By')}><a>Sort By</a></li> */}
    <li onClick={()=>handleSortBy('Rating')}><a>Rating</a></li>
    <li onClick={()=>handleSortBy('Publish Year')}><a>Publish Year</a></li>
    <li onClick={()=>handleSortBy('Number Of Pages')}><a>Number Of Pages</a></li>
  </ul>
</details>
     </div>
     

   


      <div role="tablist" className="tabs tabs-lifted w-56">
  <Link to={''} role="tab" onClick={()=> setTabIndex(0)} className={` ${tabIndex===0?'tab tab-active text-blue-600 font-semibold text-xl ':'tab text-xl '} `}>Read</Link>
  <Link to={'wish-to-read'} role="tab" onClick={()=> setTabIndex(1)} className={` ${tabIndex===1?'tab-active tab text-blue-600 font-semibold text-xl ':'tab text-xl '}`}>Wish To List</Link>
  
</div>



          <Outlet context={displayReadBooks}></Outlet>
     
    </div>
  );
};

export default ListedBooks;