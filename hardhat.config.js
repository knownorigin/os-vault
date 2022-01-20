require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require('solidity-coverage');
require('hardhat-gas-reporter');
require('@nomiclabs/hardhat-etherscan');
require('./scripts/opensea/opensea');
require('./scripts/opensea/pin-merkle-tree-to-ipfs');
require('./scripts/opensea/reconcile');
require('./scripts/opensea/merge');
require('./scripts/opensea/generate_test_tree');

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const PRIVATE_KEY = process.env.OS_VAULT_PRIVATE_KEY;

module.exports = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`${PRIVATE_KEY}`],
      maxFeePerGas: 245000000000,
      maxPriorityFeePerGas: 1900000000
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`${PRIVATE_KEY}`],
      maxFeePerGas: 245000000000,
      maxPriorityFeePerGas: 1900000000
    }
  },
  gasReporter: {
    currency: 'USD',
    enabled: (process.env.REPORT_GAS) ? true : false,
    gasPrice: 75,
    showTimeSpent: true,
    showMethodSig: true,
  }
};
