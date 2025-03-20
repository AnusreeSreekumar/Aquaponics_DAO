require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:'localhost',
  networks:{
    localhost:{
      url:"http://127.0.0.1:8545"
    },
    holskey:{
      url:"https://eth-holesky.g.alchemy.com/v2/w78nxmxF-ccuxdezBf7qeeAfjKozUIUr",
      accounts:["597cafae381938f7eab720f4b7c0244772a556f6f1e324b6c44a98440c82ff29"]
    }
  },
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};