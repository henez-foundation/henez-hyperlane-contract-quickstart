import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";
import "@nomicfoundation/hardhat-foundry";
import "@typechain/hardhat";
import "@typechain/ethers-v5";
import "./tasks/index";
require("dotenv").config();
const config = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    heneztestnet: {
      url: "https://henez-testnet.rpc.caldera.xyz/http",
      chainId: 91111,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY || ""],
    },
    berabartio: {
      url: "https://bartio.rpc.berachain.com/",
      chainId: 80084,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: {
      berabartio: "verifyContract",
    },
    customChains: [
      {
        network: "heneztestnet",
        chainId: 91111,
        urls: {
          apiURL: "https://henez-testnet.explorer.caldera.xyz/",
          browserURL: "https://henez-testnet.explorer.caldera.xyz/api/",
        },
      },
      {
        network: "berabartio",
        chainId: 80084,
        urls: {
          apiURL:
            "https://api.routescan.io/v2/network/testnet/evm/80084/etherscan/api/",
          browserURL: "https://bartio.beratrail.io/",
        },
      },
    ],
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
      },
      viaIR: true,
    },
  },
};

export default config;
