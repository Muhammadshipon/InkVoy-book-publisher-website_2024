import { useLoaderData } from "react-router-dom";
import Author from "../Components/Author";



const Authors = () => {
  const authors = useLoaderData();  
  console.log(authors);
  return (
   <div>
    <div className="w-full bg-slate-100 my-6 rounded-xl">
      <h1 className="text-center py-6 font-bold text-3xl">Authors Information</h1>
    </div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
     {
      authors.map(author=><Author author={author} key={author.id}></Author>)
     }
    </div>
   </div>
  );
};

export default Authors;