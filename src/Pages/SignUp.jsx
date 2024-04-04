import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();
    const { signUpUser} = useContext(AuthContext);


    const handleSignUp = e =>{
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmedPassword = e.target.confirmedPassword.value;
      console.log(name,email,password,confirmedPassword);

      signUpUser(email,password)
      .then(result=>{
        console.log(result.user);
        e.target.reset();
        navigate("/")
      })
      .catch(error=>{
        console.error(error.message);
      })
    }


  return (
    <div>
     <div className=" w-3/12 mx-auto my-10 rounded-xl shadow-xl">
    
       <h2 className="text-center font-bold text-3xl mt-5 py-3 text-blue-950">Create Account</h2>

       <form className="p-5" onSubmit={handleSignUp} >
        <input type="text" name="name" placeholder="Name" id="" className="px-5 py-2 bg-gray-100 border-2 rounded-lg w-full mb-4" /> <br />
        <input type="email" name="email" placeholder="Email Address" id="" className="px-5 py-2 bg-gray-100 border-2 rounded-lg w-full mb-4"  /> <br />
        <input type="password" name="password" placeholder="Password" id="" className="px-5 py-2 bg-gray-100 border-2 rounded-lg w-full mb-4"  /> <br />
        <input type="password" name="confirmedPassword" placeholder="confirmed-password" id="" className="px-5 py-2 bg-gray-100 border-2 rounded-lg w-full mb-4"  /> <br />
        <input type="submit" value="Sign Up" id="" className="w-full rounded-xl bg-[#23BE0A] text-white font-bold py-3 hover:bg-green-600 hover:scale-105" /> <br />
       </form>
     </div>
     <p className="text-center">All ready have an account?  <Link to={"/sign-in"} className="text-blue-700 font-semibold">Sign In</Link></p>
    </div>
  );
};

export default SignUp;