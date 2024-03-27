import { useLoaderData } from "react-router-dom";
import BannerPart from "../Components/BannerPart";
import BooksTittle from "../Components/BooksTittle";
import Book from "../Components/Book";




const Home = () => {
  const books = useLoaderData();
  // console.log(books);

  return (
    <div>
   <BannerPart></BannerPart>
   <BooksTittle></BooksTittle>

    <section className=" flex flex-col justify-center items-center w-full my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-12">
        {
          books.map(book=><Book book={book} key={book.id}></Book>)
        }
      </div>
      </section>  
    </div>
  );
};

export default Home;