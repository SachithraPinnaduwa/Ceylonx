
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import Lottie from "lottie-react";
import animationlogin from "../../public/loginanimation/loginanimation.json";
import { motion } from "framer-motion";

function Login() {
  const { setUser } = useUser();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userpost = {
        name: name,
        password: password
      }
      const response = await axios.post("http://localhost:8080/api/v1/students", userpost);
      
      const user  = response.data;
      if (user !== null) {
        console.log("Admin logged in:", user);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      } else {
        console.log("Login failed:");
        alert("Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error("Server error:", error.message);
    }
  };
  

  return (
    <div className="flex h-screen overflow-x-hidden">
      <div className="grid w-screen grid-cols-1 px-10 py-10 mx-auto bg-gray-800 shadow-lg md:grid-cols-2">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className=" flex-col items-center justify-center md:flex hidden"
        >
        
          <Lottie
            animationData={animationlogin}
            className="w-[80%] h-[80%] p-5"
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
            className="mb-[10%] text-2xl font-bold text-center text-white"
          >
            Log in form
          </motion.h1>
          <motion.form
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            onSubmit={handleLogin}
            className="w-full max-w-md"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              className="w-full px-3 py-2 mb-3  border border-gray-300 rounded-md"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full  px-3 py-2 mb-3 border border-gray-300 rounded-md "
            />
<div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className=" block px-[5vw] py-2 mb-3 text-white bg-blue-500 rounded-md "
            >
              Log in
            </button>
            <h2 className="p-3 text-center text-white">OR</h2>
          
            </div>
          </motion.form>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
            className="py-2 px-[5vw] text-white bg-blue-500 rounded-lg "
          >
            <Link to="/signup">Signup</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Login;
