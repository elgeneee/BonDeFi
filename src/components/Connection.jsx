import { useWallet, UseWalletProvider } from "use-wallet";
import React, { useState, createContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

export const ConnectionContext = createContext();

const Connection = () => {
  const wallet = useWallet();

  const [walletAccount, setWalletAccount] = useState(null);
  const [walletBalance, setWalletBalance] = useState(0);

  const connectWallet = async (e) => {
    e.preventDefault();
    await wallet.connect();
    setWalletAccount(wallet);
    setWalletBalance(wallet.balance);
  };

  return (
    <ConnectionContext.Provider value={walletBalance}>
      <button
        type="button"
        onClick={connectWallet}
        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] py-3 px-5 rounded-full cursor-pointer hover:bg-[#2546bd]"
      >
        <AiFillPlayCircle className="text-white mr-2" />
        <p className="text-white text-base font-semibold">Connect Wallet</p>
      </button>
    </ConnectionContext.Provider>
  );
};

export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{
      provided: { provider: window.cleanEthereum },
    }}
  >
    <Connection />
  </UseWalletProvider>
);
