import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ethers } from "ethers";

const Swap = () => {
  const [value, updateValue] = useState(0);

  const [modal, setModal] = useState(false);

  //ethers
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const checkEthers = () => {
    if (!window.ethereum) {
      alert("No wallet found. Please make sure you install metamask");
    } else {
      //  window.ethereum.request({ method: 'eth_requestAccounts'})
      //  .then(result => {
      //  setDefaultAccount(result[0]);
      //  alert(defaultAccount);
      //  })
      window.ethereum
        .request({
          method: "eth_getBalance",
          params: ["0x11fc463e45994f23ebe5bb16e86b48c50ecb9231", "latest"],
        })
        .then((result) => {
          alert(ethers.utils.formatEther(result));
        });
    }
  };

  const signMessage = async () => {
    try {
      if (!window.ethereum) {
        alert("No wallet found. Please make sure you install metamask");
      } else {
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signature = await signer.signMessage("Hello World");
        const address = await signer.getAddress();
      }
    } catch (error) {
      alert(error);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <h1 className="text-white text-2xl font-bold text-center my-6">Swap</h1>
      <div className="w-full flex md:justify-center  ">
        <div className="p-5 mb-6  flex flex-col w-8/12 h-full justify-center blue-glassmorphism">
          <div className="blue-glassmorphism2 flex flex-1 p-4 my-2">
            <div className="items-center flex-none">
              <img
                alt="ETH"
                src="https://res.cloudinary.com/sushi-cdn/image/fetch/w_128,f_auto,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/token/usdt.jpg"
                decoding="async"
                data-nimg="fixed"
                className="rounded-full h-14 shadow-lg shadow-cyan-500/50"
              />
            </div>
            <div className="flex flex-col px-4">
              <p className="text-gray-400">Swap from:</p>
              <p className="text-white">USDT</p>
            </div>
            <div className="flex flex-auto items-center space-x-3 rounded bg-[#12243D] p-3 sm:w-3/5">
              <input
                className="text-white text-xl relative flex-auto overflow-hidden bg-transparent outline-0"
                placeholder="0.0"
                value={value}
                onChange={(e) => updateValue(e.target.value)}
                type="number"
                step={0.001}
              ></input>
            </div>
          </div>

          <div className="blue-glassmorphism2 flex flex-1 p-4 my-2">
            <div className="items-center flex-none">
              <img
                alt="Bond Token"
                src="https://res.cloudinary.com/dlidl2li4/image/upload/v1642871028/bondefi/Group_5_oub7om.png"
                decoding="async"
                data-nimg="fixed"
                className="rounded-full h-14 shadow-lg shadow-yellow-500/50"
              />
            </div>
            <div className="flex flex-col px-4">
              <p className="text-gray-400">Swap To:</p>
              <p className="text-white">Bond Token</p>
            </div>
            <div className="flex flex-auto items-center space-x-3 rounded bg-[#12243D] p-3 sm:w-3/5">
              <input
                className="text-white text-xl relative flex-auto overflow-hidden bg-transparent outline-0"
                value={value}
                placeholder="0.0"
                type="number"
                onChange={(e) => updateValue(e.target.value)}
                step={0.001}
              ></input>
            </div>
          </div>
          <div className="text-white pt-3">1 USDT = 1 Bond Token</div>
          <button
            type="button"
            onClick={toggleModal}
            className="text-white justify-center mx-auto flex shadow-lg shadow-blue-500/50  w-4/12 mt-2 p-2 bg-blue-500  hover:bg-blue-600 rounded-2xl cursor-pointer"
          >
            Swap
          </button>
        </div>

        {modal && (
          <div className="modal">
            <div
              // onClick={toggleModal}
              className="overlay items-center justify-center flex"
            >
              <div className="relative  text-white bg-slate-700 rounded-xl  w-80 h-1/2 flex flex-col p-2">
                <div className="flex flex-row justify-between">
                  <div className="">
                    <h2 className="text-center font-medium text-xl">
                      Information
                    </h2>
                  </div>
                  <div className="">
                    <AiFillCloseCircle className="" onClick={toggleModal} />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="my-3">
                    <p>Swap From:</p>
                    <p>USDT: {value}</p>
                  </div>
                  <div className="my-3">
                    <p>Swap To:</p>
                    <p>Bond Token: {value}</p>
                  </div>
                  <div>
                    <p>Interest Rate: 1.3%</p>
                    <p>Expiry Date: 1 Jun 2023</p>
                  </div>
                </div>
                <div className=" absolute inset-x-0 bottom-0 ">
                  <button
                    type="button"
                    onClick={signMessage}
                    className="text-white text-lg my-5 justify-center mx-auto flex shadow-lg shadow-blue-500/50  w-4/12 mt-2 p-2 bg-blue-500  hover:bg-blue-600 rounded-2xl cursor-pointer"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Swap;
