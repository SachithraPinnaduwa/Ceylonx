import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useUser } from './UserContext';

function App() {
  const { user, setUser } = useUser();

  // const getUser = async () => {
  //   try {
  //   //  const {data} = await axios.get("http://localhost:8080/auth/login/success", {withCredentials: true});


  //    setUser(user);
  //    console.log(user);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };
  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      // getUser();
    }
  }, [setUser]);
  return (
    <>
    <div className="">
      <Routes>
        <Route path="/login" element={user ? <Navigate to={"/"}/> : <Login /> } />
        <Route path="/signup" element={user ? <Navigate to={"/"}/> : <Signup />} />
        <Route  path="/"  element={ <Home user={user} /> } />
       
      </Routes>
    </div>  
    </>
  );
}

export default App;
