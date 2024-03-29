import { Link } from "react-router-dom";


const BannerPart = () => {
  return (
    
      <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse justify-around w-full">
    <img  src="/src/assets/Growing_Through_Struggle-Jhankar_Mahbub.jpg" className="lg:w-[400px] rounded-lg shadow-2xl hover:scale-105 hover:border-red-500 bg-white border-4 border-blue-600" />
   
    <div>
      <h1 className="text-6xl font-bold lg:mb-4">Books to freshen up </h1> <h1 className="text-6xl font-bold mb-5">your bookshelf</h1>
      
     <Link to={'/listed-book'}> <button className="btn btn-primary text-white font-bold mt-8 hover:scale-105 hover:bg-[#23BE0A]">View The List</button></Link>
    </div>
  </div>
</div>
  
  );
};

export default BannerPart;