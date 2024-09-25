import { expect } from "chai";
import { ethers } from "hardhat";
import {
  MockMailbox,
  MockMailbox__factory,
  TestRecipient__factory,
} from "../typechain";
import { BytesLike } from "ethers";

describe("Hyperlane", function () {
  describe("Hyperlane Message Sending and Receiving", function () {
    it("should be able to send a message directly", async function () {
      const originDomain = 1;
      const destinationDomain = 2;
      const signer = (await ethers.getSigners())[0];
      const destinationMailbox = await new MockMailbox__factory(signer).deploy(
        destinationDomain
      );
      await destinationMailbox.deployed();
      const originMailbox = (await new MockMailbox__factory(signer).deploy(
        originDomain
      )) as MockMailbox;
      await originMailbox.deployed();
      await originMailbox.addRemoteMailbox(
        destinationDomain,
        destinationMailbox.address
      );

      const recipient = await new TestRecipient__factory(signer).deploy();
      const data = ethers.utils.toUtf8Bytes("This is a test message");

      await originMailbox["dispatch(uint32,bytes32,bytes)"](
        destinationDomain,
        convertAddressToBytes32(recipient.address),
        data
      );
      await destinationMailbox.processNextInboundMessage();

      const dataReceived = await recipient.lastData();
      expect(dataReceived).to.eql(ethers.utils.hexlify(data));
    });

    it("can send a message via HyperlaneMessageSender/Receiver", async function () {
      const originDomain = 1;
      const destinationDomain = 2;
      const testString = "This is a test";
      const signer = (await ethers.getSigners())[0];
      const destinationMailbox = await new MockMailbox__factory(signer).deploy(
        destinationDomain
      );
      await destinationMailbox.deployed();
      const originMailbox = await new MockMailbox__factory(signer).deploy(
        originDomain
      );
      await originMailbox.deployed();
      await originMailbox.addRemoteMailbox(
        destinationDomain,
        destinationMailbox.address
      );

      const senderFactory = await ethers.getContractFactory(
        "HyperlaneMessageSender"
      );
      const sender = await senderFactory.deploy(originMailbox.address);

      const receiverFactory = await ethers.getContractFactory(
        "HyperlaneMessageReceiver"
      );
      const receiver = await receiverFactory.deploy(destinationMailbox.address);

      await sender.sendString(
        destinationDomain,
        convertAddressToBytes32(receiver.address),
        testString
      );
      await destinationMailbox.processNextInboundMessage();
      expect(await receiver.lastMessage()).to.eql(testString);
    });
  });
});

const convertAddressToBytes32 = (address: string): BytesLike => {
  return ethers.utils.hexZeroPad(address, 32);
};
