## Setup

# Hyperlane Quickstart

This project demonstrates how to send messages between two testnets, Henez testnet and Bera bartio, using Hyperlane. The following instructions will guide you through the setup and usage of the provided scripts.

Henez Testnet [Henez Testnet](https://docs.henez.fi/resources/chain-information)

Bera bArtio [Bera bArtio](https://bartio.faucet.berachain.com/)

Developers can use this as a quickstart to start with [Hyperlane](https://github.com/hyperlane-xyz/hyperlane-monorepo).

## Installation and Testing

To install dependencies and run tests, use the following commands:

Before installing dependencies, rename `.env.example` to `.env`, and update necessary variables

```shell
$ yarn install
$ yarn hardhat:test
$ forge build
$ forge test
```

## Scripts

Deploy the Hyperlane Message Receiver and Sender on henez testnet:

```shell
$ yarn hardhat deployHyperlaneMessageReceiver --network heneztestnet
$ yarn hardhat deployHyperlaneMessageSender --network heneztestnet
```

Deploy the Hyperlane Message Receiver and Sender on bera bartio:

```shell
$ yarn hardhat deployHyperlaneMessageReceiver --network berabartio
$ yarn hardhat deployHyperlaneMessageSender --network berabartio
```

Send messages between Henez Testnet and Bera bArtio:

```shell
$ yarn hardhat sendMessage --network berabartio --target heneztestnet
$ yarn hardhat sendMessage --network heneztestnet --target berabartio
```

## Project Structure

```
/home/charlie/Desktop/hyperlane-quickstart/
├── README.md
├── package.json
├── hardhat.config.js
├── deployments/
│   ├── heneztestnet/
│   └── berabartio/
│   └── Contain deployed addresses of blockchain networks
├── constants/
├── contracts/
│   ├── HyperlaneMessageReceiver.sol
│   └── HyperlaneMessageSender.sol
│   └── Contain Solidity contracts
├── tasks/
│   ├── deployHyperlaneMessageReceiver.ts
│   ├── deployHyperlaneMessageSender.ts
│   └── Contain deploy scripts and utility scripts to interact with blockchain, hardhat <taskname>, defined in `hardhat.config.ts`
└── test/
    └── Contain test files using Foundry and Hardhat framework
```
