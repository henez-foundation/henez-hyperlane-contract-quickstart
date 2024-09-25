import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import {
  HyperlaneMessageSender,
  HyperlaneMessageSender__factory,
} from "../typechain";
import { readFileSync } from "fs";
import { Contract } from "ethers";
import {
  convertAddressToBytes32,
  getMessageIdFromTxReceipt,
  waitForMessageIdIsDelivered,
} from "./utils";

const taskName = "sendMessage";
const taskDescription = "";

export default task(
  taskName,
  taskDescription,
  async (taskArgs: TaskArguments, hre) => {
    const networkName = hre.network.name;
    if (!networkName) {
      throw new Error("Failed to get network name");
    }
    const targetChainName = taskArgs.target;

    const signer = (await hre.ethers.getSigners())[0];

    const sourceChainConfig = JSON.parse(
      readFileSync(`./deployments/${networkName}.json`, "utf-8")
    );

    const targetChainConfig = JSON.parse(
      readFileSync(`./deployments/${targetChainName}.json`, "utf-8")
    );

    if (
      !sourceChainConfig.HyperlaneMessageSender ||
      !targetChainConfig.HyperlaneMessageReceiver
    ) {
      throw new Error(
        "HyperlaneMessageSender on source chain or HyperlaneMessageReceiver on target chain not found"
      );
    }

    const senderAddressOnSource = sourceChainConfig.HyperlaneMessageSender;
    const senderSource = new Contract(
      senderAddressOnSource,
      HyperlaneMessageSender__factory.createInterface(),
      hre.ethers.provider
    ) as HyperlaneMessageSender;

    const sentMessage = await senderSource
      .connect(signer)
      .sendString(
        targetChainConfig.ChainId,
        convertAddressToBytes32(targetChainConfig.HyperlaneMessageReceiver),
        `Hello from ${networkName}`
      );
    const sentMessageReceipt = await sentMessage.wait();
    console.log(
      `Message sent from ${networkName} to ${targetChainName} w/ tx hash ${sentMessage.hash} on ${networkName}`
    );

    // wait for delivery
    const messageId = getMessageIdFromTxReceipt(sentMessageReceipt);
    await waitForMessageIdIsDelivered(messageId, targetChainConfig);
  }
).addParam("target", "target chain name");
