
import { FaFacebook,FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import appstore from '../../public/buttons/appstore.svg'
import googleplay from '../../public/buttons/googleplay.svg'
import kidsafe from '../../public/kidsafe.png'
function Footer() {
  return (
    <footer className=" bg-[#228257]">
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-2  px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className=" text-xl font-semibold text-white">
              Creta Class
            </h2>
            <img src={appstore} alt="appstore" width={100} />
            <img src={googleplay} alt="googleplay" width={100} />
            <h2 className="mb-6 text-xl font-semibold text-white">
              Certified
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 grid-cols-1 w-[80%]">
                <div className=" bg-slate-100/10 justify-center items-center flex py-2 rounded-xl">
              <img
                src={kidsafe}
                alt="verified badge"
               className="w-20"
              />
              </div>
              <div className=" bg-slate-100/10 justify-center items-center flex py-2 rounded-xl">
            <img
                src={kidsafe}
                alt="verified badge"
               className="w-20"
              />
                  </div>
               <div className=" bg-slate-100/10 justify-center items-center flex py-2 rounded-xl">
             <img
                src={kidsafe}
                alt="verified badge"
               className="w-20"
              />
                  </div>
               <div className=" bg-slate-100/10 justify-center items-center flex py-2 rounded-xl">
              <img
                src={kidsafe}
                alt="verified badge"
               className="w-20"
              />
                  </div>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-white ">
              School
            </h2>
            <div className="flex lg:flex-row gap-x-10 flex-col">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    India
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Maharashtra
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Bihar
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Gujarat
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Karnataka
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Andhara Pradesh
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                  Madhaya Pradesh
                  </a>
                </li>
              </ul>

              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    West Bengal
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Telanga
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Uttar Predesh
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tamil Nadu
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Rajastan
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Kerala
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Kid store
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-white">
              Math
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Numbers and Operations
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Geometry
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Logic and Patterns
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Problem Solving
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Measurement and Data
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Attention and Memory
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-white">
              Contact Us
            </h2>
            <div className="flex flex-row gap-6 mb-4">
            <FaFacebook className="text-gray-300 text-3xl"  />
            <FaYoutube className="text-gray-300 text-3xl" />
            <RiInstagramFill className="text-gray-300 text-3xl" />
            </div>

            <div className="flex flex-row gap-6 items-center">
            <BsFillTelephoneFill className="text-gray-300 text-2xl"/>
            <div>
            <span className="text-gray-300 text-sm">Mon-Sat: 12:30-20:30</span>
            <br />
            <span className="text-gray-300">+65 1234 5678</span>
            </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 items-center justify-center flex flex-col">
          <span className="text-sm text-gray-400 sm:text-center">
          6 RAFFLES QUAY #14-06 SINGAPORE 048580
          </span>
          <br />
          
            <span className="text-sm text-gray-400 sm:text-center">
           PRivacy Policy |  Children's Privacy Policy | email: ind_service@cretaclassName.com
            </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
