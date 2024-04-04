import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {
  const navigate = useNavigate();
  const {signInUser} = useContext(AuthContext);
  const [success,setSuccess] = useState(null);
  const [error,setError] = useState(null);

  const handleSignIn = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
    setSuccess('');
    setError('');

    signInUser(email,password)
    .then(result=>{
      console.log(result.user);
      setSuccess("SignIn Successfully!")
      e.target.reset();
      navigate("/");
    })
    .catch(error=>{
      console.error(error.message);
      setError(error.message);
    })
  }


return (
  <div>
   <div className=" w-3/12 mx-auto my-10 rounded-xl shadow-xl">
  
     <h2 className="text-center font-bold text-3xl mt-5 py-3 text-blue-950">Sign In to Your Account</h2>

     <form className="p-5" onSubmit={handleSignIn} >
     
      <input type="email" name="email" placeholder="Email Address" id="" className="px-5 py-2 bg-gray-100 border-2 rounded-lg w-full mb-4"  /> <br />
      <input type="password" name="password" placeholder="Password" id="" className="px-5 py-2 bg-gray-100 border-2 rounded-lg w-full mb-4"  /> <br />
      
      <input type="submit" value="Sign In" id="" className="w-full rounded-xl bg-blue-700 text-white font-bold py-3 hover:bg-blue-900 hover:scale-105" /> <br />
      {
        success&& <p className="text-green-600 my-2">{success}</p>
      }
      {
        error&& <p className="text-red-600 my-2">{error}</p>
      }
     </form>
   </div>
   <p className="text-center">New to <span className="font-bold">INKVOY</span>? <Link to={"/sign-up"} className="text-blue-700 font-semibold">Sign Up</Link></p>
  </div>
);
};

export default SignIn;