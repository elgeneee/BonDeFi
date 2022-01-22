import React from "react";

const Swap = () => {
  return (
    <div>
      <h1 className="text-white text-2xl font-bold text-center">Swap</h1>
      <div className="w-full flex md:justify-center">
        <div className="p-5 mb-6  flex flex-col w-8/12 h-full justify-center  blue-glassmorphism">
          <div className="blue-glassmorphism2 flex flex-1 p-4">
            <div className="items-center flex-none">
              <img
                alt="ETH"
                src="https://res.cloudinary.com/sushi-cdn/image/fetch/w_128,f_auto,q_auto/https://raw.githubusercontent.com/sushiswap/logos/main/token/eth.jpg"
                decoding="async"
                data-nimg="fixed"
                className="rounded-full h-14"
              />
            </div>
            <div className="flex flex-col px-4">
              <p>Swap from:</p>
              <p>ETH</p>
            </div>
            <div className="flex flex-auto items-center space-x-3 rounded bg-[#12243D] p-3 sm:w-3/5">
                <input className="relative flex-auto overflow-hidden bg-transparent">
                </input>
            </div>  
          </div>

          <div className="blue-glassmorphism2 flex flex-1 p-4">
            <div className="items-center rounded-full h-14 w-14 flex-none flex bg-white">
              
            </div>
            <div className="flex flex-col px-4">
              <p>Swap To:</p>
              <p>Bond Token</p>
            </div>
            <div className="flex flex-auto items-center space-x-3 rounded bg-[#12243D] p-3 sm:w-3/5">
                <input className="relative flex-auto overflow-hidden bg-transparent">
                </input>
            </div>   
          </div>
          <button
            type="button"
            className="text-white w-full mt-2 border-[1px] p-2 bg-blue-500 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Send now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
