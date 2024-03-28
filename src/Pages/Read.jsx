import { useEffect, useState } from "react";
import { getReadBooks } from "../utility/BookList";
import ReadBook from "../Components/ReadBook";


const Read = () => {
  const [books,setBooks] =useState([]);
  useEffect(()=>{
   const readBooks = getReadBooks();
   setBooks(readBooks);
   
  },[]) 
  console.log(books);
  
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