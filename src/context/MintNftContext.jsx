import React, { useEffect, useState, createContext } from "react";
import { ethers } from 'ethers';
import {contractABI, contractAddress} from '../utils/constants';

export const MintNftContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {

  const provider = new ethers.providers.Web3Provider(ethereum);
  
}