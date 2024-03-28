import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks, saveWishToReadBooks } from "../utility/BookList";


const BookDetails = () => {
  const books = useLoaderData();
  
  const {id} = useParams();
  const idInt = parseInt(id);
  
  const book = books.find(book => book.bookId === idInt);
  console.log(book);
  const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;
  
  const handleToRead = (book)=>{
     saveReadBooks(book);
  }
  const handleToWishToReadBooks = (book)=>{
     saveWishToReadBooks(book);
  }

  
  
  return (
    <div>
  <div className="hero-content flex-col lg:flex-row justify-between">
   <div className="md:w=[40%]">
   <img src={image} className="md:w-[450px] rounded-lg shadow-2xl bg-cover" />
   </div>
    <div className="md: w-[55%]">
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <span className="block text-xl my-3 font-bold tracking-widest uppercase dark:text-violet-600 ml-2">By :{author}</span>
      <hr />
      <p className="my-3">{category}</p>
      <hr />
      <p className="py-6"><span className="font-bold">Review :</span> {review}</p>

      <div className="my-5 flex flex-col lg:flex-row gap-5 items-center">
        <span className="font-bold lg:mr-8">Tag</span>
  <div className="flex flex-col lg:flex-row gap-5 items-center">
  <button className="bg-slate-200 btn text-[#23BE0A] font-bold px-5 py-2 rounded-xl lg:mr-5">#{tags[0]}</button>
  <button className="bg-slate-200 btn text-[#23BE0A] font-bold px-5 py-2 rounded-xl">#{tags[1]}</button>
  <button className="lg:ml-5 bg-slate-200 btn text-[#23BE0A] font-bold px-5 py-2 rounded-xl">#{tags[2]}</button>
  </div>
</div>
<hr />





<div className="overflow-x-auto my-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Number of pages :</th>
        <th><span className="font-bold"> {totalPages}</span></th>
       
      </tr>
    </thead>
    <thead>
      <tr>
       
        <th>Publisher :</th>
        <th><span className="font-bold"> {publisher}</span></th>
        
      </tr>
    </thead>
    <thead>
      <tr>
        
        <th>Year of Publishing :</th>
        <th>{yearOfPublishing}</th>
       
      </tr>
    </thead>
    <thead>
      <tr>
        
        <th>Rating :</th>
        <th>{rating}</th>
       
      </tr>
    </thead>
   
  </table>
</div>
      
      <button onClick={()=> handleToRead(book)} className="btn btn-primary btn-outline mr-5">Read</button>
      <button onClick={()=>handleToWishToReadBooks(book)}  className="btn btn-outline btn-success">Wishlist</button>
    </div>
  </div>
</div>
  );
};

export default BookDetails;