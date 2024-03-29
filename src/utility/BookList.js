
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

              //  Read Books functionality 

const getReadBooks = () =>{
  const storedBooks = localStorage.getItem('readBooks');
  if(storedBooks){
    const readBooks = JSON.parse(storedBooks);
    return readBooks;
  }
  return [];
}


const saveReadBooks = (book) =>{
  const books = getReadBooks();
  const isExist = books.find(b=> b.bookId === book.bookId);
  if(isExist){
    return toast.error('All ready added to read list')
  }
  books.push(book);
  localStorage.setItem('readBooks', JSON.stringify(books));
 return toast.success('Added Book to read list Successfully!!!');
}



              //  wish To Read Books functionality
         
const getWishToReadBooks = () =>{
  const storedBooks = localStorage.getItem('wishToReadBooks');
  if(storedBooks){
    const wishToReadBooks = JSON.parse(storedBooks);
    return wishToReadBooks;
  }
  return [];
}


const saveWishToReadBooks = (book) =>{
  const books = getWishToReadBooks();
  const readList = getReadBooks();
  const isExist = books.find(b=> b.bookId === book.bookId);
  const isExist2 =readList.find(b=> b.bookId === book.bookId);
  if(isExist){
    return toast.error('All ready added to Wishlist')
  }
  else if(isExist2){
    return toast.error('All ready added to read list')
  }
  books.push(book);
  localStorage.setItem('wishToReadBooks', JSON.stringify(books));
 return toast.success('Added Book to Wishlist Successfully!!!');
}

         
















export {saveReadBooks,getReadBooks,saveWishToReadBooks,getWishToReadBooks}


