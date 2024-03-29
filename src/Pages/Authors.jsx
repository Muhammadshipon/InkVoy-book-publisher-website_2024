import { useLoaderData } from "react-router-dom";


const Authors = () => {
  const authors = useLoaderData();  
  console.log(authors);
  return (
    <div>
     {
      authors.map(author=>)
     }
    </div>
  );
};

export default Authors;