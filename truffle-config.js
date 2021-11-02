const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    // develop: {
    //   port: 8545,
    // },
    ropsten: {
      // networkCheckTimeout: 20000,
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY
          // "https://rinkeby.infura.io/v3/14a724eeca4144bd94541c1edf41c011"
        ),
      network_id: 3,
       
    }, 

    
  },
};
