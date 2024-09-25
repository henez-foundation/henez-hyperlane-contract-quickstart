import { BytesLike, ContractReceipt, ethers, providers } from "ethers";

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

export const waitForMessageIdIsDelivered = async (
  messageId: string,
  networkConfig: any
) => {
  // ProcessId(bytes32 indexed messageId)=
  const ProcessIdTopic =
    "0x1cae38cdd3d3919489272725a5ae62a4f48b2989b0dae843d3c279fee18073a9";
  const filter = {
    address: networkConfig.Mailbox,
    topics: [ProcessIdTopic],
  };

  console.log(
    `Waiting for MessageId: ${messageId} to be delivered to ${networkConfig.Name}`
  );

  const provider = providers.getDefaultProvider(networkConfig.RPC);

  let isWaiting = true;

  provider.on(filter, async (log: Log) => {
    if (log.topics[1] !== messageId) {
      return;
    }
    console.log(
      `Received message at tx hash ${log.transactionHash} on ${networkConfig.Name}`
    );
    isWaiting = false;
  });

  while (isWaiting) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    if (isWaiting) {
      console.log(`Continue waiting for ${messageId} to be delivered`);
    }
  }
};
