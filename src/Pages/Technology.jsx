import { useLoaderData } from "react-router-dom";
import Book from "../Components/Book";


const Technology = () => {
  const books = useLoaderData();
  const techBooks = books.filter(book => book.category === "Technology");
  console.log(techBooks);
  return (
    <div>
   

    <section className=" flex flex-col justify-center items-center w-full my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-12">
        {
          techBooks.map(book=><Book book={book} key={book.id}></Book>)
        }
      </div>
      </section> 
      </div> 
  );
};

export default Technology;