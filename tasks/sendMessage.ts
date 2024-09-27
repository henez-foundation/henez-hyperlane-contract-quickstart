import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import { CrosschainMessager, CrosschainMessager__factory } from "../typechain";
import { readFileSync } from "fs";
import { Contract } from "ethers";
import {
  convertAddressToBytes32,
  getMessageIdFromTxReceipt,
  waitForMessageIsDelivered,
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
      !sourceChainConfig.CrosschainMessager ||
      !targetChainConfig.CrosschainMessager
    ) {
      throw new Error(
        "CrosschainMessager on source chain or CrosschainMessager on target chain not found"
      );
    }

    const crosschainMessagerOnSource = sourceChainConfig.CrosschainMessager;
    const ccMessagerOnSourceContract = new Contract(
      crosschainMessagerOnSource,
      CrosschainMessager__factory.createInterface(),
      hre.ethers.provider
    ) as CrosschainMessager;
    const message = taskArgs.message;
    const sentMessage = await ccMessagerOnSourceContract
      .connect(signer)
      .sendString(
        targetChainConfig.ChainId,
        convertAddressToBytes32(targetChainConfig.CrosschainMessager),
        message
      );
    const sentMessageReceipt = await sentMessage.wait();

    console.log(
      `📡 \"${message}\" message sent from ${networkName} to ${targetChainName}
w/ tx hash ${sentMessage.hash} on ${networkName}`
    );

    // wait for delivery
    const messageId = getMessageIdFromTxReceipt(sentMessageReceipt);
    await waitForMessageIsDelivered(messageId, message, targetChainConfig);
  }
)
  .addParam("target", "target chain name")
  .addParam("message", "message");
