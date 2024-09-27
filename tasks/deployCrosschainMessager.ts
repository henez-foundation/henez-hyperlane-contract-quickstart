import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import { CrosschainMessager__factory } from "../typechain";
import { readFileSync, writeFileSync } from "fs";

const taskName = "deployCrosschainMessager";
const taskDescription = "";

export default task(
  taskName,
  taskDescription,
  async (taskArgs: TaskArguments, hre) => {
    const networkName = hre.network.name;
    if (!networkName) {
      throw new Error("Failed to get network name");
    }

    const deployedContracts = JSON.parse(
      readFileSync(`./deployments/${networkName}.json`, "utf-8")
    );

    console.log(`Deploying CrosschainMessager on network ${networkName}`);

    const CrosschainMessagerFactory = (await hre.ethers.getContractFactory(
      "CrosschainMessager"
    )) as CrosschainMessager__factory;

    const crosschainMessagerContract = await CrosschainMessagerFactory.deploy(
      deployedContracts.Mailbox
    );

    await crosschainMessagerContract.deployed();
    console.log(
      `Deployed crosschainMessager contract to ${crosschainMessagerContract.address}`
    );

    // save the contract address to the deployments file
    deployedContracts.CrosschainMessager = crosschainMessagerContract.address;

    writeFileSync(
      `./deployments/${networkName}.json`,
      JSON.stringify(deployedContracts, null, 2)
    );

    console.log(
      `Saved CrosschainMessager contract address to deployments file`
    );
  }
);
