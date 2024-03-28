import { IoMdTime } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const ReadBook = ({book}) => {
  const {bookId,bookName,author,image,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;
  return (
    <div className="border-2 my-16 rounded-xl shadow-lg">
  <div className="hero-content flex-col lg:flex-row justify-start gap-16">
   <div className="md:w=[30%]">
   <img src={image} className="md:w-[350px] rounded-lg shadow-2xl bg-cover" />
   </div>
    <div className="md: w-[55%]">
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <span className="block text-xl my-3 font-bold tracking-widest uppercase dark:text-violet-600 ml-2">By :{author}</span>

      <div className="my-5 flex flex-col gap-5 md:flex-row items-center">
        <span className="font-bold lg:mr-5">Tag</span>
  <button className="bg-slate-200 btn text-[#23BE0A] font-bold px-5 py-2 rounded-xl lg:mr-5">#{tags[0]}</button>
  <button className="bg-slate-200 btn text-[#23BE0A] font-bold px-5 py-2 rounded-xl">#{tags[1]}</button>
  <button className="lg:ml-5 bg-slate-200 btn text-[#23BE0A] font-bold px-5 py-2 rounded-xl">#{tags[2]}</button>
<p className="flex items-center font-semibold gap-2 lg:ml-6"> <IoMdTime /> Year Of Publishing : {yearOfPublishing}</p>

</div>

<div className="flex gap-14 lg:-ml-5 flex-col md:flex-row my-5">
<p className="flex items-center font-semibold gap-2 ml-6"> <IoPeople />Publisher : {publisher}</p>
<p className="flex items-center font-semibold gap-2 ml-6"> <FaFileAlt/> Pages : {totalPages}</p>



</div>

<hr />

      <div className="flex gap-5 justify-between my-5 flex-col md:flex-row">
      <button className="btn rounded-full bg-red-100 text-red-400 ">Category:{category}</button>  
   <button className="btn rounded-full bg-blue-100 text-blue-400 ">Rating: {rating}</button>     
   <Link to={`/book-details/${bookId}`}><button className="btn px-8 btn-primary text-white font-bold rounded-full hover:scale-105 hover:bg-[#23BE0A]">View Details</button>  </Link>
      
        
        </div>      







      
    </div>
  </div>
</div>
  );
};

export default ReadBook;