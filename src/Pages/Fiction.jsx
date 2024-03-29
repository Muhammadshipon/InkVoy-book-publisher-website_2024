import { useLoaderData } from "react-router-dom";
import Book from "../Components/Book";


const Fiction = () => {
  const books = useLoaderData();
  const FictionBooks = books.filter(book => book.category === "Fiction");
  return (
    <div>
   

    <section className=" flex flex-col justify-center items-center w-full my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-12">
        {
          FictionBooks.map(book=><Book book={book} key={book.id}></Book>)
        }
      </div>
      </section> 
      </div> 
  );
};

export default Fiction;