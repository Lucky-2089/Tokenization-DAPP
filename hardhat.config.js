require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};