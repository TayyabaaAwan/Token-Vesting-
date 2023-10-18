require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');


const privatekey1 = "3de12ab1e199cd2b0b6a5ff528de1415debb0cfc0b921e5d2b5a78f972fc5785"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [privatekey1]
    },
    BNB: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [privatekey1]
    },
    BSCscan: {
      url: "https://rpc.ankr.com/bsc",
      accounts: [privatekey1]
    },
    Sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [privatekey1]
    },
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [privatekey1]
    },
    fantom: {  //https://rpc.ftm.tools
      url: "https://rpc.ankr.com/fantom_testnet/1c519f11e555bb7962579a5a3784049247f8cf4403a5436f2e22dd2e7d6e01a0", // https://rpcapi.fantom.network
      accounts: [privatekey1]
    }



  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000, // Adjust the number of optimization runs as needed
      },
      evmVersion: "istanbul", // Adjust the EVM version as needed
      viaIR: true, // Enable compiling via IR
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 90000
  },
  etherscan: {
    //apiKey: "RJ61S4CVJ776QS721JNDPMKXXE6FN9RYIM", // Your Etherscan API key
    // apiKey: "SXSNKKATWHRADGBZ2UU8ZUIMCNX6QJ2VCC"//BSCscan
    //apiKey: "QK3VC3BCQHZ6YC4KIZRQ9U34N4FJBM9A16"//Fantom
    apiKey: "FBREU4Y5AFC1QJT29ARDJMRNNJ59M9R5C5"//polygon
  },
};

