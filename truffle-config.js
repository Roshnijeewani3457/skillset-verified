require("babel-register");
require("babel-polyfill");
require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const { SEED_PHRASE, INFURA_KEY } = require("./seed-phrase");
// const infuraKey = INFURA_KEY;
// const seedPhrase = SEED_PHRASE;
const sepoliaRpcKey = process.env.SEPOLIA_RPC_KEY;
const sepoliaWalletKey = process.env.SEPOLIA_WALLET_KEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none,
    },
    // rinkeby: {
    //   provider: () => new HDWalletProvider(seedPhrase, infuraKey),
    //   network_id: 4,
    //   gas: 5500000,
    //   confirmations: 2,
    //   timeoutBlocks: 200000000000000,
    //   skipDryRun: true,
    // },
    sepolia: {
      provider: () => new HDWalletProvider(sepoliaWalletKey, sepoliaRpcKey),
      network_id: 11155111,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200000000000000,
      skipDryRun: true,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "petersburg",
    },
  },
  plugins: ["truffle-contract-size"],
};
