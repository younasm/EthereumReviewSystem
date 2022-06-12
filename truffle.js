module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gasPrice: 2000000000,
      gas: 6721975,
    },
    compilers: {
      solc: {
        version: "^0.4.24",
        
      }
    },

  }
};