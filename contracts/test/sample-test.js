const { expect } = require("chai");
const { ethers } = require("hardhat");

const main = async () => {
  const erc20_nft = await ethers.getContractFactory("bondtoken");
    const bondtokens = await erc20_nft.deploy();
    await bondtokens.deployed();

    console.log("Greeter deployed to", bondtokens.address);


}

const runMain = async () => {
  try  {
    await main();
    process.exit(0);
  }catch {
console.log(error);
process.exit(1);
  }
}

runMain();
// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined  
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });
