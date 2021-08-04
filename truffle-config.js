module.exports = {
  networks: {
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host:"localhost",
      port: 8545,
      network_id: "*" // it was 4 **My change**
    },
    compilers: {
      solc: {
        version: "^0.4.24"
      }
    }
  }
};