import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div flex-initial justify-center items-center>
          <h1 className="text-white text-3xl font-extrabold">BonDeFi</h1>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Exchange</li>
        <li className="mx-4 cursor-pointer">Tutorials</li>
        <li className="mx-4 cursor-pointer">Wallets</li>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative  md:hidden">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
       
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="mx-4 cursor-pointer">Market</li>
            <li className="my-2 text-lg mx-4 cursor-pointer">Exchange</li>
            <li className="my-2 text-lg mx-4 cursor-pointer">Tutorials</li>
            <li className="my-2 text-lg mx-4 cursor-pointer">Wallets</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
