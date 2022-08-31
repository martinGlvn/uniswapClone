require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks :{
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/IXJBEqYYfgDtDRO290tjUjgaxr85H-r1',
      accounts:[
        '2afe97558195a2033df46120e1a2d407e0c70f12fc5e7b9a9905211f617d3066'
      ]
      
    }
  }
};
