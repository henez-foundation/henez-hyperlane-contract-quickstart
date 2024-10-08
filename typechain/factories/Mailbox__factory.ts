/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Mailbox, MailboxInterface } from "../Mailbox";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hook",
        type: "address",
      },
    ],
    name: "DefaultHookSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "DefaultIsmSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "destination",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "recipient",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Dispatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    name: "DispatchId",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "origin",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "sender",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "Process",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    name: "ProcessId",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hook",
        type: "address",
      },
    ],
    name: "RequiredHookSet",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultHook",
    outputs: [
      {
        internalType: "contract IPostDispatchHook",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultIsm",
    outputs: [
      {
        internalType: "contract IInterchainSecurityModule",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "delivered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deployedBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "messageBody",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
      {
        internalType: "contract IPostDispatchHook",
        name: "hook",
        type: "address",
      },
    ],
    name: "dispatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "messageBody",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "hookMetadata",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_messageBody",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_defaultIsm",
        type: "address",
      },
      {
        internalType: "address",
        name: "_defaultHook",
        type: "address",
      },
      {
        internalType: "address",
        name: "_requiredHook",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "latestDispatchedId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_metadata",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "processedAt",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "processor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "messageBody",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
      {
        internalType: "contract IPostDispatchHook",
        name: "hook",
        type: "address",
      },
    ],
    name: "quoteDispatch",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "messageBody",
        type: "bytes",
      },
    ],
    name: "quoteDispatch",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "messageBody",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "defaultHookMetadata",
        type: "bytes",
      },
    ],
    name: "quoteDispatch",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "recipientIsm",
    outputs: [
      {
        internalType: "contract IInterchainSecurityModule",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requiredHook",
    outputs: [
      {
        internalType: "contract IPostDispatchHook",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hook",
        type: "address",
      },
    ],
    name: "setDefaultHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "setDefaultIsm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hook",
        type: "address",
      },
    ],
    name: "setRequiredHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c03461008257601f611baf38819003918201601f19168301916001600160401b0383118484101761008757808492602094604052833981010312610082575163ffffffff81168103610082574360805260a052604051611b11908161009e823960805181610b36015260a051818181610afa01528181610be701526118350152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b600090813560e01c90816307a2fda1146111895750806310b83dc01461116f578063134fbb4f146111515780631426b7f4146110b55780633d1250b71461108c57806348aee8d4146110665780635d1fe5a9146110335780636e5f516e1461100a578063715018a614610fbf5780637c39d13014610b7957806381d2ea9514610b5957806382ea7bfe14610b1e5780638d3638f414610add5780638da5cb5b14610ab457806399b0480914610a195780639c42bd18146108aa578063affed0e014610886578063d6d08a091461085d578063e495f1d414610834578063e70f48ac146107fe578063f2fde38b1461077f578063f794687a146106e5578063f7ccd321146106b1578063f8c8765e146103a4578063fa31de011461015d5763ffa1ad741461013f57600080fd5b3461015a578060031936011261015a57602060405160038152f35b80fd5b610166366112d4565b6068549293926000926001600160a01b0391821692831561039f575b61018e90828888611802565b9283519660209788860120968760665560655463ffffffff9060018282160182811161038b5782169063ffffffff191617606555604051918a83521690600080516020611a1c8339815191523391806101e98d82018b611313565b0390a4604051928660008051602061199c8339815191528780a2806069541691630aaccd2360e41b85526040600486015286604486015288858061023a606482018b8152606060248401528a611313565b0381865afa948515610380578795610351575b50843410610349575b823b1561034557604051878163086011b960e01b95868252604060048301528260448301528189816102968d606483019088825260606024850152611313565b03925af1801561033a57610327575b50169234039034821161031357833b1561030f579185939184936102d7604051978896879586948552600485016113c0565b03925af18015610304576102f0575b5050604051908152f35b6102fa8291611353565b61015a57806102e6565b6040513d84823e3d90fd5b8580fd5b634e487b7160e01b86526011600452602486fd5b61033390979197611353565b95896102a5565b6040513d8a823e3d90fd5b8680fd5b349450610256565b9094508881813d8311610379575b610369818361137c565b810103126103455751938961024d565b503d61035f565b6040513d89823e3d90fd5b634e487b7160e01b8a52601160045260248afd5b610182565b503461015a57608036600319011261015a576103be61125f565b6024803591906001600160a01b03808416908185036106ac576044908135818116938482036106ac57606494853590848216938483036106ac578b549a60ff8c60081c16159b8c809d61069f575b8015610688575b1561062f5760ff8e610442928f60018419831617835561061e575b505460081c1661043d8161193b565b61193b565b61044b336118e3565b61045361188b565b3b156105e457606780546001600160a01b0319908116861790915593600080516020611a7c8339815191528d80a261048961188b565b3b156105a957808360685416176068556000805160206119bc8339815191528b80a26104b361188b565b3b1561056d5781906069541617606955600080516020611abc8339815191528880a26104dd61188b565b84161561052e575050506104f0906118e3565b6104f75780f35b61ff001981541681557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160018152a180f35b60849291600080516020611a5c8339815191526564647265737360d01b9260266040519562461bcd60e51b875260206004880152860152840152820152fd5b60405162461bcd60e51b815260206004820152602381880152600080516020611a3c83398151915281860152621858dd60ea1b81870152608490fd5b60405162461bcd60e51b8152602060048201526022818a01526000805160206119dc833981519152818801526118dd60f21b81890152608490fd5b60405162461bcd60e51b8152602060048201526021818b0152600080516020611a9c83398151915281890152601d60fa1b818a0152608490fd5b61ffff19166101011781553861042e565b60405162461bcd60e51b815260206004820152602e818d01527f496e697469616c697a61626c653a20636f6e747261637420697320616c726561818b01526d191e481a5b9a5d1a585b1a5e995960921b818c0152608490fd5b50303b1580156104135750600160ff821614610413565b50600160ff82161061040c565b600080fd5b503461015a5760206106dd6106c536611275565b6068546001600160a01b03169590949193919061160e565b604051908152f35b503461015a57602036600319011261015a576106ff61125f565b61070761188b565b803b1561074257606780546001600160a01b0319166001600160a01b03929092169182179055600080516020611a7c8339815191528280a280f35b60405162461bcd60e51b81526020600482015260216024820152600080516020611a9c8339815191526044820152601d60fa1b6064820152608490fd5b503461015a57602036600319011261015a5761079961125f565b6107a161188b565b6001600160a01b038116156107bc576107b9906118e3565b80f35b60405162461bcd60e51b81526020600482015260266024820152600080516020611a5c83398151915260448201526564647265737360d01b6064820152608490fd5b503461015a57602036600319011261015a57602061082261081d61125f565b611741565b6040516001600160a01b039091168152f35b503461015a57602036600319011261015a576020610853600435611723565b6040519015158152f35b503461015a578060031936011261015a576069546040516001600160a01b039091168152602090f35b503461015a578060031936011261015a57602063ffffffff60655416604051908152f35b503461015a576109226108bc366112d4565b6068546001600160a01b03949390851692908315610a14575b6108df9394611802565b9082606954169160405191630aaccd2360e41b9384845260406004850152600060448501528360648101916000835260606024830152818060209a8b9588611313565b03915afa9384156109d45786936000956109e0575b5061096b94956040518096819582948352604060048401526000604484015260648301906000825260606024850152611313565b0392165afa9081156109d4576000916109a7575b50810180911161099157604051908152f35b634e487b7160e01b600052601160045260246000fd5b90508281813d83116109cd575b6109be818361137c565b810103126106ac57518361097f565b503d6109b4565b6040513d6000823e3d90fd5b8481959296503d8311610a0d575b6109f8818361137c565b810103126106ac5761096b9386935194610937565b503d6109ee565b6108d5565b503461015a57602036600319011261015a57610a3361125f565b610a3b61188b565b803b15610a7657606880546001600160a01b0319166001600160a01b039290921691821790556000805160206119bc8339815191528280a280f35b60405162461bcd60e51b815260206004820152602260248201526000805160206119dc83398151915260448201526118dd60f21b6064820152608490fd5b503461015a578060031936011261015a576033546040516001600160a01b039091168152602090f35b503461015a578060031936011261015a57602060405163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461015a578060031936011261015a5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b503461015a5760206106dd610b6d366111ec565b9594909493919361160e565b50604036600319011261015a576001600160401b03600435818111610fbb57610ba69036906004016111bf565b602492919235828111610fb757610bc19036906004016111bf565b9390928460011161030f576003843560f81c03610f7b5784602d1161030f5763ffffffff7f000000000000000000000000000000000000000000000000000000000000000016602985013560e01c03610f3657610c1d856115f3565b610c2a604051918261137c565b85815260208101903687870111610f325786868337876020888301015251902091610c5483611723565b610ef05785604d1161034557610c76602d8601356001600160a01b0316611741565b916040519081604081011090604083011117610edc578786610d96610d83602097969585604063ffffffff970160405233815289810165ffffffffffff43168152898752606a8b52604087209160018060a01b0390511682549165ffffffffffff60a01b905160a01b169160018060d01b03191617179055610cf88c8561191a565b99610d038d8661192c565b6040519b8c9a8b998a989193602d909201356001600160a01b031692167f0d381c2a574ae8f04e213db7cfb4df8df712cdbd427d9868ffef380660ca65748a80a47f1cae38cdd3d3919489272725a5ae62a4f48b2989b0dae843d3c279fee18073a98780a2637bf41d7760e11b855260406004860152604485019161139f565b8281036003190160248401528a8a61139f565b03926001600160a01b03165af1908115610ed1578491610e96575b5015610e525780610dc383859361191a565b90610dce848261192c565b91602d8201356001600160a01b03163b15610e4e5763ffffffff90610e24604051968795869485946356d5d47560e01b86521660048501526024840152606060448401526064830190604c1901604d860161139f565b03913490602d01356001600160a01b03165af1801561030457610e45575080f35b6107b990611353565b8380fd5b606460405162461bcd60e51b815260206004820152602060248201527f4d61696c626f783a2049534d20766572696669636174696f6e206661696c65646044820152fd5b90506020813d602011610ec9575b81610eb16020938361137c565b81010312610e4e57518015158103610e4e5738610db1565b3d9150610ea4565b6040513d86823e3d90fd5b634e487b7160e01b88526041600452602488fd5b60405162461bcd60e51b815260206004820152601a60248201527913585a5b189bde0e88185b1c9958591e4819195b1a5d995c995960321b6044820152606490fd5b8780fd5b60405162461bcd60e51b815260206004820152601f60248201527f4d61696c626f783a20756e65787065637465642064657374696e6174696f6e006044820152606490fd5b60405162461bcd60e51b815260206004820152601460248201527326b0b4b63137bc1d103130b2103b32b939b4b7b760611b6044820152606490fd5b8480fd5b8280fd5b503461015a578060031936011261015a57610fd861188b565b603380546001600160a01b0319811690915581906001600160a01b03166000805160206119fc8339815191528280a380f35b503461015a578060031936011261015a576067546040516001600160a01b039091168152602090f35b503461015a57602036600319011261015a576020906004358152606a8252604060018060a01b0391205416604051908152f35b60206106dd61107436611275565b6068546001600160a01b0316959094919391906113e9565b503461015a578060031936011261015a576068546040516001600160a01b039091168152602090f35b503461015a57602036600319011261015a576110cf61125f565b6110d761188b565b803b1561111257606980546001600160a01b0319166001600160a01b03929092169182179055600080516020611abc8339815191528280a280f35b60405162461bcd60e51b81526020600482015260236024820152600080516020611a3c8339815191526044820152621858dd60ea1b6064820152608490fd5b503461015a578060031936011261015a576020606654604051908152f35b60206106dd61117d366111ec565b959490949391936113e9565b9050346111bb5760203660031901126111bb5765ffffffffffff60406020936004358152606a8552205460a01c168152f35b5080fd5b9181601f840112156106ac578235916001600160401b0383116106ac57602083818601950101116106ac57565b60a06003198201126106ac5760043563ffffffff811681036106ac5791602435916001600160401b03916044358381116106ac578261122d916004016111bf565b939093926064359182116106ac57611247916004016111bf565b90916084356001600160a01b03811681036106ac5790565b600435906001600160a01b03821682036106ac57565b60806003198201126106ac5760043563ffffffff811681036106ac5791602435916001600160401b03916044358381116106ac57826112b6916004016111bf565b939093926064359182116106ac576112d0916004016111bf565b9091565b60606003198201126106ac5760043563ffffffff811681036106ac579160243591604435906001600160401b0382116106ac576112d0916004016111bf565b919082519283825260005b84811061133f575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161131e565b6001600160401b03811161136657604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101761136657604052565b908060209392818452848401376000828201840152601f01601f1916010190565b916113e693916113d89160408552604085019161139f565b916020818403910152611313565b90565b90956000956001600160a01b039592949093919291868416156115e7575b90611413918987611802565b948551926020938488012098896066556065549663ffffffff976001898216018981116115d35789169063ffffffff1916176065556040978851918783521690600080516020611a1c8339815191523391806114728d8b830190611313565b0390a485518960008051602061199c8339815191528a80a2606954630aaccd2360e41b82528316908581806114ac8c8b8a600485016113c0565b0381855afa95861561158d578a966115a3575b505084341061159b575b803b1561159757865163086011b960e01b8082529392918a9082908189816114f68f8e8d600485016113c0565b03925af1801561158d5761157a575b50169234039034821161156657833b15610f32579087949392916115368751988996879586948552600485016113c0565b03925af190811561155d575061154b57505090565b6115558291611353565b61015a575090565b513d84823e3d90fd5b634e487b7160e01b88526011600452602488fd5b61158690999199611353565b9738611505565b88513d8c823e3d90fd5b8880fd5b3494506114c9565b9080929650813d83116115cc575b6115bb818361137c565b8101031261159757519338806114bf565b503d6115b1565b634e487b7160e01b8c52601160045260248cfd5b60685487169350611407565b6001600160401b03811161136657601f01601f191660200190565b93946001600160a01b0394909392919087861615611717575b90611633939291611802565b90826069541694604051948594630aaccd2360e41b97888752602096879181806116628a8a89600485016113c0565b03915afa9687156109d4576000976116e4575b50859697611694604097969751978896879586948552600485016113c0565b0392165afa9182156109d4576000926116b6575b505081018091116109915790565b90809250813d83116116dd575b6116cd818361137c565b810103126106ac575138806116a8565b503d6116c3565b949580975085813d8311611710575b6116fd818361137c565b810103126106ac57869451969594611675565b503d6116f3565b60685486169750611627565b600052606a60205265ffffffffffff60406000205460a01c16151590565b6040805163de523cf360e01b60208201908152600482529181016001600160401b03811182821017611366576040526000928392839251915afa3d156117fa573d9061178c826115f3565b9161179a604051938461137c565b82523d83602084013e5b806117f0575b6117c0575b50506067546001600160a01b031690565b6020818051810103126111bb57602001516001600160a01b038116919082900361015a5750806113e657806117af565b50805115156117aa565b6060906117a4565b83606d92946113e69460655496604051978895600360f81b602088015263ffffffff60e01b809260e01b166021880152817f000000000000000000000000000000000000000000000000000000000000000060e01b16602588015233602988015260e01b166049860152604d85015284840137810160008382015203604d81018452018261137c565b6033546001600160a01b0316330361189f57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b603380546001600160a01b039283166001600160a01b0319821681179092559091166000805160206119fc833981519152600080a3565b906009116106ac576005013560e01c90565b906029116106ac576009013590565b1561194257565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fdfe788dbc1b7152732178210e7f4d9d010ef016f9eafbe66786bd7169f56e0c353a65a63e5066ee2fcdf9d32a7f1bf7ce71c76066f19d0609dddccd334ab87237d74d61696c626f783a2064656661756c7420686f6f6b206e6f7420636f6e7472618be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0769f711d20c679153d382254f59892613b58a97cc876b249134ac25c80f9c8144d61696c626f783a20726571756972656420686f6f6b206e6f7420636f6e74724f776e61626c653a206e6577206f776e657220697320746865207a65726f2061a76ad0adbf45318f8633aa0210f711273d50fbb6fef76ed95bbae97082c75daa4d61696c626f783a2064656661756c742049534d206e6f7420636f6e74726163329ec8e2438a73828ecf31a6568d7a91d7b1d79e342b0692914fd053d1a002b1a2646970667358221220827183cc3390f924e21c597c9e9b3cdac8dd76d6b3c55955310e4dbc5ade035764736f6c63430008180033";

export class Mailbox__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Mailbox> {
    return super.deploy(_localDomain, overrides || {}) as Promise<Mailbox>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): Mailbox {
    return super.attach(address) as Mailbox;
  }
  connect(signer: Signer): Mailbox__factory {
    return super.connect(signer) as Mailbox__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MailboxInterface {
    return new utils.Interface(_abi) as MailboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Mailbox {
    return new Contract(address, _abi, signerOrProvider) as Mailbox;
  }
}
