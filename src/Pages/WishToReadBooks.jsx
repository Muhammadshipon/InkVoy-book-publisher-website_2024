import { useEffect, useState } from "react";
import { getWishToReadBooks } from "../utility/BookList";
import WishBook from "../Components/WishBook";

const WishToReadBooks = () => {
  const [books,setBooks] =useState([]);
  useEffect(()=>{
   const wishToReadBooks = getWishToReadBooks();
   setBooks(wishToReadBooks);
   
  },[]) 

  console.log(books);
  return (
    <div>
    <h3 className="text-xl font-bold text-center my-6">Number of Wish To Read Books : (<span className="text-[#23BE0A]">{books.length}</span>)</h3>
    <div>
     {
       books.map(book=><WishBook book={book} key={book.bookId}></WishBook>)
     }
    </div>
   </div>
  );
};

export default WishToReadBooks;