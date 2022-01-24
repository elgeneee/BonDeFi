// require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };

//https://eth-ropsten.alchemyapi.io/v2/PXS6S5SX-dHjAlv5lTAxcN2umKDaptwy
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/PXS6S5SX-dHjAlv5lTAxcN2umKDaptwy",
      accounts: ['323a75a4c07518f36905e85cc198d801b0f899823d1e4a409ad170b86e65b1a4']
    }
  }
}