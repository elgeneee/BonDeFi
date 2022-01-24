const { ethers } = require("hardhat");

const main = async () => {
  const MintNft = await ethers.getContractFactory("MintNft");
  const mint_nft = await MintNft.deploy();
  await mint_nft.deployed();

  console.log("MintNft deployed to", mint_nft.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch {
    console.log(error);
    process.exit(1);
  }
};

runMain();
