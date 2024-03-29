import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-6  ">
      <h1 className="text-6xl font-bold">
        404
      </h1>
      <h2>Page Not Found</h2>
      <p>please! <Link to='/' className="font-bold text-blue-700">Go back</Link> to Home</p>
      
      </div>
    </div>
  );
};

export default Error;