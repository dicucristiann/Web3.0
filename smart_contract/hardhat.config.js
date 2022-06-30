

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/V6e6iUO4M8Z68mQa6ZNY_bAs5ZPJJ7BV',
      accounts: [ '52f0494f437814909b5d207f1c5bda4b9a1d693fa36b358d14e1726827472eff' ]
}
  }
}