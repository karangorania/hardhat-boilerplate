require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const { MUMBAI_API_URL, ROPSTEN_API_URL,RINKEBY_API_URL, PRIVATE_KEY, ETHERSCAN_KEY } =
  process.env;

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.6.0',
      },
      {
        version: '0.8.0',
      },
      {
        version: '0.8.4',
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: RINKEBY_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    ropsten: {
      url: ROPSTEN_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    mainnet: {
      url: ETHEREUM_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    matic: {
      url: MATIC_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    mumbai: {
      url: MUMBAI_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};
