import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { telegram, whatsapp, instagram, youtube, facebook } from "../assets";
import ReactWhatsapp from 'react-whatsapp';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-4 flex items-center">
      {/* <div className="w-full flex items-center "> */}
        {/* <img src={logo} alt="hoobank" className="sm:flex hidden absolute transform translate-y-10 -translate-x-3 w-[80px] h-[40px] sm:w-[124px] sm:h-[130px]  " /> */}
        <ul className="list-none flex sm:flex items-center flex-1 gap-x-3">
          <ReactWhatsapp number="650000" message="Hello World!!!">

          {/* <ReactWhatsapp message="Hello, I want to make a booking!!!"> */}
            <img src={whatsapp} alt="billing" className=" relative z-[5] " />
          </ReactWhatsapp>

          <a href='https://t.me/testtest1234512' target="_blank">
            <img src={telegram} alt="billing" className=" relative z-[5] w-5" />
          </a>
          <a href="https://www.instagram.com/aaobateinkarein/" target="_blank">
            <img src={instagram} alt="billing" className=" relative z-[5] w-5" />
          </a> 
          <a href="https://www.instagram.com/aaobateinkarein/" target="_blank">
            <img src={youtube} alt="billing" className=" relative z-[5] w-5" />
          </a> 
          <a href="https://www.instagram.com/aaobateinkarein/" target="_blank">
            <img src={facebook} alt="billing" className=" relative z-[5] w-5" />
          </a> 
        </ul>
        
        <ul className="list-none sm:flex hidden justify-end flex-1 gap-x-32">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-bold  cursor-pointer text-[20px] ${
                active === nav.title ? "text-pink" : "text-dimDarkPink"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              // onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      {/* </div> */}

      <div className="sm:hidden flex flex-1 justify-end items-centers">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-pink" : "text-dimDarkRed"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;