// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";

contract CrosschainMessager {
    bytes32 public lastSender;
    string public lastMessage;
    IMailbox mailbox;

    event SentMessage(uint32 destinationDomain, bytes32 recipient, string message);
    event ReceivedMessage(bytes indexed message, uint32 origin, bytes32 sender);

    constructor(address _mailbox) {
        mailbox = IMailbox(_mailbox);
    }

    // This function is called by the mailbox when a message is dispatched to this contract
    function handle(uint32 _origin, bytes32 _sender, bytes calldata _message) external {
        lastSender = _sender;
        lastMessage = string(_message);
        emit ReceivedMessage(_message, _origin, _sender);
    }

    // This function sends a message from source chain to destination chain
    // The message is dispatched to the recipient on the destination chain
    function sendString(uint32 _destinationDomain, bytes32 _recipient, string calldata _message) external {
        mailbox.dispatch(_destinationDomain, _recipient, bytes(_message));
        emit SentMessage(_destinationDomain, _recipient, _message);
    }
}
