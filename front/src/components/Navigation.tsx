

import logo from "../../public/navlogo.png";
import cookie from "../../public/cookie.svg";
import telephone from "../../public/telephone.svg";
import { useNavigate } from "react-router-dom";
interface User {
  id: number;
  name: string;
  password: string;
 
}
const Navigation = ({ user }:{user:User}) => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <nav className="  py-4  ">
      <div className="lg:flex flex-wrap  hidden justify-center">
        
        <img src={logo} alt="" className="w-[257px] h-[52px] mr-6 block" />
        <div className="flex flex-row gap-x-8">
          <button className="text-[16px]   font-[900]  border-[2px] border-[#2CC84D] py-2 px-3 text-[#495340] rounded-[15px] flex flex-row justify-center items-center">
            ABOUT
            <img src={cookie} alt="" className="w-[22px]" />
          </button>
          <button className="text-[16px] font-[900] border-[2px] border-[#2CC84D] py-2 px-3 text-[#495340] rounded-[15px]  flex flex-row justify-center items-center">
            MATH
            <img src={cookie} alt="" className="w-[22px] " />
          </button>
        </div>
        <div className=" flex flex-row gap-x-4 ml-[10vw] ">
          <div className="lg:flex hidden flex-row gap-x-4">
            <img src={telephone} alt="" width={50} height={50} />
            <div className="flex flex-col">
              <p>Mon-Sat: 12:30-20:30</p>
              <p className="text-[#2CC84D]">+918069490088</p>
            </div>
          </div>
          {user ? (
            <button
              onClick={logout}
              className=" hover:shadow-md mr-10 bg-[#2CC84D] px-[18px] py-[9px] rounded-[6px] flex flex-row justify-center items-center border-t-2 border-white"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.53 3.94448C11.6698 3.35184 12.5133 3.35184 12.6531 3.94448L14.1026 10.0873C14.1528 10.3 14.3189 10.4662 14.5317 10.5164L20.6745 11.9659C21.2671 12.1057 21.2671 12.9492 20.6745 13.089L14.5317 14.5385C14.3189 14.5887 14.1528 14.7548 14.1026 14.9676L12.6531 21.1104C12.5133 21.7031 11.6698 21.7031 11.53 21.1104L10.0804 14.9676C10.0302 14.7548 9.86414 14.5887 9.65139 14.5385L3.50856 13.089C2.91593 12.9492 2.91593 12.1057 3.50856 11.9659L9.65139 10.5164C9.86414 10.4662 10.0302 10.3 10.0804 10.0873L11.53 3.94448Z"
                  fill="white"
                />
              </svg>

              <span className="text-white">LOGOUT</span>
            </button>
          ) : (
            <button
              onClick={login}
              className="hover:shadow-md  mr-10 bg-[#2CC84D] px-[18px] py-[9px] rounded-[6px] flex flex-row justify-center items-center border-t-2 border-white"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.53 3.94448C11.6698 3.35184 12.5133 3.35184 12.6531 3.94448L14.1026 10.0873C14.1528 10.3 14.3189 10.4662 14.5317 10.5164L20.6745 11.9659C21.2671 12.1057 21.2671 12.9492 20.6745 13.089L14.5317 14.5385C14.3189 14.5887 14.1528 14.7548 14.1026 14.9676L12.6531 21.1104C12.5133 21.7031 11.6698 21.7031 11.53 21.1104L10.0804 14.9676C10.0302 14.7548 9.86414 14.5887 9.65139 14.5385L3.50856 13.089C2.91593 12.9492 2.91593 12.1057 3.50856 11.9659L9.65139 10.5164C9.86414 10.4662 10.0302 10.3 10.0804 10.0873L11.53 3.94448Z"
                  fill="white"
                />
              </svg>

              <span className="text-white">LOGIN</span>
            </button>
          )}
        </div>
      </div>
      <div className=" flex flex-row gap-x-4 lg:hidden justify-center">
          <div className="lg:flex hidden flex-row gap-x-4">
            <img src={telephone} alt="" width={50} height={50} />
            <div className="flex flex-col">
              <p>Mon-Sat: 12:30-20:30</p>
              <p className="text-[#2CC84D]">+918069490088</p>
            </div>
          </div>
          {user ? (
            <button
              onClick={logout}
              className=" hover:shadow-md mr-10 bg-[#2CC84D] px-[18px] py-[9px] rounded-[6px] flex flex-row justify-center items-center border-t-2 border-white"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.53 3.94448C11.6698 3.35184 12.5133 3.35184 12.6531 3.94448L14.1026 10.0873C14.1528 10.3 14.3189 10.4662 14.5317 10.5164L20.6745 11.9659C21.2671 12.1057 21.2671 12.9492 20.6745 13.089L14.5317 14.5385C14.3189 14.5887 14.1528 14.7548 14.1026 14.9676L12.6531 21.1104C12.5133 21.7031 11.6698 21.7031 11.53 21.1104L10.0804 14.9676C10.0302 14.7548 9.86414 14.5887 9.65139 14.5385L3.50856 13.089C2.91593 12.9492 2.91593 12.1057 3.50856 11.9659L9.65139 10.5164C9.86414 10.4662 10.0302 10.3 10.0804 10.0873L11.53 3.94448Z"
                  fill="white"
                />
              </svg>

              <span className="text-white">LOGOUT</span>
            </button>
          ) : (
            <button
              onClick={login}
              className="hover:shadow-md  mr-10 bg-[#2CC84D] px-[18px] py-[9px] rounded-[6px] flex flex-row justify-center items-center border-t-2 border-white"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.53 3.94448C11.6698 3.35184 12.5133 3.35184 12.6531 3.94448L14.1026 10.0873C14.1528 10.3 14.3189 10.4662 14.5317 10.5164L20.6745 11.9659C21.2671 12.1057 21.2671 12.9492 20.6745 13.089L14.5317 14.5385C14.3189 14.5887 14.1528 14.7548 14.1026 14.9676L12.6531 21.1104C12.5133 21.7031 11.6698 21.7031 11.53 21.1104L10.0804 14.9676C10.0302 14.7548 9.86414 14.5887 9.65139 14.5385L3.50856 13.089C2.91593 12.9492 2.91593 12.1057 3.50856 11.9659L9.65139 10.5164C9.86414 10.4662 10.0302 10.3 10.0804 10.0873L11.53 3.94448Z"
                  fill="white"
                />
              </svg>

              <span className="text-white">LOGIN</span>
            </button>
          )}
        </div>
    </nav>
  );
};

export default Navigation;
