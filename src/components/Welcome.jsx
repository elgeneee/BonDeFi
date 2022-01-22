import React, { useState, useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose, AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
import { transactionContext } from "./transactionContext";

const Welcome = () => {
  const connectWallet = () => {};
  const handleSubmit = () => {};
  const {
    address,
    setAddress,
    amount,
    setAmount,
    keyword,
    setKeyword,
    message,
    setMessage,
  } = useContext(transactionContext);

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className="flex items-start justify-between md:p-12 py-6 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Apply loan by registering your company here!
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card2 white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">04x325...@52</p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 mb-6 sm:w-96  flex flex-col  w-full h-full justify-center items-center blue-glassmorphism">
        <input
          placeholder="Address To"
          type="text"
          step="0.0001"
          onClick={event => setAddress(event.target.value)}
          className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
        <input
          placeholder="Amount (ETH)"
          type="number"
          step="0.0001"
          onChange={event => setAmount(event.target.value)}
          className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
        <input
          placeholder="Keyword (Gif)"
          type="text"
          onChange={event => setKeyword(event.target.value)}
          className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
        <input
          placeholder="Enter Message"
          type="text"
          onChange={event => setMessage(event.target.value)}
          className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Send now
        </button>
      </div>

      <div>
      <p className="text-white">{amount}</p>
      <p className="text-white">{keyword}</p>
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
};

export default Welcome;
