import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import {
  HyperlaneMessageReceiver__factory,
  HyperlaneMessageSender__factory,
} from "../typechain";
import { readFileSync, writeFileSync } from "fs";

const taskName = "deployHyperlaneMessageSender";
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

    console.log(`Deploying HyperlaneMessageSender on network ${networkName}`);

    const HyperlaneMessageSenderFactory = (await hre.ethers.getContractFactory(
      "HyperlaneMessageSender"
    )) as HyperlaneMessageSender__factory;

    const hyperlaneMessageSender = await HyperlaneMessageSenderFactory.deploy(
      deployedContracts.Mailbox
    );

    await hyperlaneMessageSender.deployed();
    console.log(
      `Deployed HyperlaneMessageSender contract to ${hyperlaneMessageSender.address}`
    );

    // save the contract address to the deployments file
    deployedContracts.HyperlaneMessageSender = hyperlaneMessageSender.address;

    writeFileSync(
      `./deployments/${networkName}.json`,
      JSON.stringify(deployedContracts, null, 2)
    );

    console.log(
      `Saved HyperlaneMessageSender contract address to deployments file`
    );
  }
);
