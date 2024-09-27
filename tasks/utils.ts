import { BytesLike, ContractReceipt, ethers, providers } from "ethers";
import { CrosschainMessager__factory } from "../typechain";

export const convertAddressToBytes32 = (address: string): BytesLike => {
  return ethers.utils.hexZeroPad(address, 32);
};

export const getMessageIdFromTxReceipt = (txReceipt: ContractReceipt) => {
  const logs = txReceipt.logs;
  if (logs.length === 0) {
    throw new Error("No logs found in transaction receipt");
  }
  // DispatchId(bytes32 indexed messageId)
  const DispathIdTopic =
    "0x788dbc1b7152732178210e7f4d9d010ef016f9eafbe66786bd7169f56e0c353a";

  const log = logs.find((log) => log.topics[0] === DispathIdTopic);
  if (!log) {
    throw new Error("No DispatchId log found in transaction receipt");
  }
  return log.topics[1];
};

export interface Log {
  blockNumber: number;
  blockHash: string;
  transactionIndex: number;
  removed: boolean;
  address: string;
  data: string;
  topics: string[];
  transactionHash: string;
  logIndex: number;
}

export const waitForMessageIsDelivered = async (
  messageId: string,
  message: string,
  networkConfig: any
) => {
  // $ cast sig-event "ReceivedMessage(uint32 origin, bytes32 sender, bytes message)"
  const ReceivedMessageTopic =
    "0xc9f92737086b645b21611169d04fa8cc1b05a453ea6a9befbf3930d619e23bec";
  const listenedTopics = [ReceivedMessageTopic];
  const filter = {
    address: networkConfig.CrosschainMessager,
    topics: listenedTopics,
  };

  console.log(
    `Waiting for MessageId: ${messageId} to be delivered to ${networkConfig.Name}`
  );

  const provider = providers.getDefaultProvider(networkConfig.RPC);

  let isWaiting = true;

  provider.on(filter, async (log: Log) => {
    switch (log.topics[0]) {
      case ReceivedMessageTopic:
        const decodedEvent =
          CrosschainMessager__factory.createInterface().decodeEventLog(
            "ReceivedMessage",
            log.data,
            log.topics
          );
        // Decode the message
        const encodedMessageBytes = decodedEvent.message;
        const decodedMessage = ethers.utils.toUtf8String(encodedMessageBytes);

        console.log(`✅ Received message: ${decodedMessage}
At tx hash ${log.transactionHash} on ${networkConfig.Name}`);
        break;
    }
    isWaiting = false;
  });

  while (isWaiting) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    if (isWaiting) {
      console.log(`Continue waiting for message`);
    }
  }
};
