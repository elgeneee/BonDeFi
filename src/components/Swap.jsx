import React from "react";

const Swap = () => {
  return (
    <div>
      <h1 className="text-white text-2xl font-bold text-center">Swap</h1>
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
                className="text-white text-xl relative flex-auto overflow-hidden bg-transparent"
                placeholder="0.0"
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
                className="text-white text-xl relative flex-auto overflow-hidden bg-transparent"
                placeholder="0.0"
                type="number"
                step={0.001}
              ></input>
            </div>
          </div>
          <button
            type="button"
            className="text-white justify-center mx-auto flex shadow-lg shadow-blue-500/50  w-4/12 mt-2 p-2 bg-blue-500  hover:bg-blue-600 rounded-2xl cursor-pointer"
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
