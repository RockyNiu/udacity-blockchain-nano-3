const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "2ce4e1bedb6f484e983afb7d614a0543";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
        network_id: 11155111,       // sepolia's id
        gas: 5000000,
        gasPrice: 1000000
    },
  },

  mocha: {
    timeout: 20000
  },

  compilers: {
    solc: {
      version: "0.4.24",
    }
  }
}
