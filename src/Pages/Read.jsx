

import ReadBook from "../Components/ReadBook";


import { useEffect, useState } from "react";

import { useOutletContext } from "react-router-dom";
import { getReadBooks } from "../utility/BookList";



const Read = () => {
    
 const display = useOutletContext()

 console.log(display);

 
  const [books,setBooks] =useState([]);
   

  

  useEffect(()=>{

   setBooks(display);
 
   
  },[ display]) 



  useEffect(()=>{
    const readBooks = getReadBooks();
    setBooks(readBooks);
  },[])
  

  
  return (
    <div>
     <h3 className="text-xl font-bold text-center my-6">Number of Read Books : (<span className="text-[#23BE0A]">{books.length}</span>)</h3>
     <div>
      {
        books.map(book=><ReadBook book={book} key={book.bookId}></ReadBook>)
      }
     </div>
    </div>
  );
};

export default Read;