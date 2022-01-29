import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Connection from "./Connection";
import { ConnectionContext } from "./Connection";

const Welcome = () => {
  const walletBalance = useContext(ConnectionContext);
   
  const readWalletAccount = () => {
    alert(walletBalance);
  }

  return (
    <div className="flex w-full flex-col justify-center items-center">

      <div className="flex items-start justify-between md:p-12 py-6 px-4">
        <div className="flex flex-1 justify-center flex-col">
          <h1 className="text-3xl sm:text-5xl text-center text-white text-gradient py-1">
            Apply loan by registering<br></br> your company here!
          </h1>
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
                <p className="text-white font-light text-sm">{ walletBalance }</p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
        <Connection />
        </div>
          
        </div>

        
      </div>
  
    </div>
  );
};

export default Welcome;
