import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 
const Book = ({book}) => {
  // console.log(book)
  const {bookId,bookName,author,image,rating,category,tags} = book;
  return (
   <Link to={`/book-details/${bookId}`}>
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900  hover:border-blue-600 border-2 hover:scale-105">
<div className=" w-full h-96 border-4 rounded-md">
<img src={image} alt="" className="object-cover object-center rounded-md w-full h-full dark:bg-gray-500" />
</div>
<div className="my-5">
  <button className="bg-slate-200 btn text-[#23BE0A] font-bold px-5 py-2 rounded-xl mr-5">{tags[0]}</button>
  <button className="bg-slate-200 btn text-[#23BE0A] font-bold px-5 py-2 rounded-xl">{tags[1]}</button>
</div>
	<div className="mt-6 mb-2">
  <h2 className="text-2xl font-bold tracking-wide">{bookName}</h2>
		<span className="block text-xs my-3 font-semibold tracking-widest uppercase dark:text-violet-600">By :{author}</span>
		
	</div>
	<hr />
  <div className="flex justify-between mt-3">
    <p>{category}</p>
    <p className="flex items-center ">{rating} <span className="text-yellow-400 ml-2"><IoIosStarHalf/></span></p>
  </div>
</div>
   </Link>
  );
};

Book.propTypes ={
  book: PropTypes.object.isRequired
}
export default Book;