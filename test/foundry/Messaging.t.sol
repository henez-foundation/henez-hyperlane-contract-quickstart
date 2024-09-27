// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "@hyperlane-xyz/core/contracts/mock/MockMailbox.sol";
import {TypeCasts} from "@hyperlane-xyz/core/contracts/libs/TypeCasts.sol";

import "../../contracts/CrosschainMessager.sol";

import {TestRecipient} from "@hyperlane-xyz/core/contracts/test/TestRecipient.sol";
import {MockMailbox} from "@hyperlane-xyz/core/contracts/mock/MockMailbox.sol";

contract MessagingTest is Test {
    MockMailbox originMailbox;
    MockMailbox destinationMailbox;

    CrosschainMessager ccMessager1;
    CrosschainMessager ccMessager2;

    uint32 originDomain = 1;
    uint32 destinationDomain = 2;

    function setUp() public {
        originMailbox = new MockMailbox(originDomain);
        destinationMailbox = new MockMailbox(destinationDomain);
        originMailbox.addRemoteMailbox(destinationDomain, destinationMailbox);
        ccMessager1 = new CrosschainMessager(address(originMailbox));
        ccMessager2 = new CrosschainMessager(address(destinationMailbox));
    }

    function testSendMessage(string calldata _message) public {
        ccMessager1.sendString(destinationDomain, TypeCasts.addressToBytes32(address(ccMessager2)), _message);
        destinationMailbox.processNextInboundMessage();
        assertEq(ccMessager2.lastMessage(), _message);
    }
}
