import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import { HyperlaneMessageReceiver__factory } from "../typechain";
import { readFileSync, writeFileSync } from "fs";

const taskName = "deployHyperlaneMessageReceiver";
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

    console.log(`Deploying HyperlaneMessageReceiver on network ${networkName}`);

    const HyperlaneMessageReceiverFactory =
      (await hre.ethers.getContractFactory(
        "HyperlaneMessageReceiver"
      )) as HyperlaneMessageReceiver__factory;

    const hyperlaneMessageReceiver =
      await HyperlaneMessageReceiverFactory.deploy(deployedContracts.Mailbox);

    await hyperlaneMessageReceiver.deployed();
    console.log(
      `Deployed HyperlaneMessageReceiver contract to ${hyperlaneMessageReceiver.address}`
    );

    // save the contract address to the deployments file
    deployedContracts.HyperlaneMessageReceiver =
      hyperlaneMessageReceiver.address;

    writeFileSync(
      `./deployments/${networkName}.json`,
      JSON.stringify(deployedContracts, null, 2)
    );

    console.log(
      `Saved HyperlaneMessageReceiver contract address to deployments file`
    );
  }
);
