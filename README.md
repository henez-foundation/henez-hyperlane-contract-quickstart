## Setup

Send message from henez testnet to bera bartio and vice versa

```shell
$ yarn install
$ yarn hardhat:test
$ forge build
$ forge test
```

## Scripts

```shell
$ yarn hardhat deployHyperlaneMessageReceiver --network heneztestnet
$ yarn hardhat deployHyperlaneMessageSender --network heneztestnet
```

```shell
$ yarn hardhat deployHyperlaneMessageReceiver --network berabartio
$ yarn hardhat deployHyperlaneMessageSender --network berabartio
```

```shell
$ yarn hardhat sendMessage --network berabartio --target heneztestnet
$ yarn hardhat sendMessage --network heneztestnet --target berabartio
```
