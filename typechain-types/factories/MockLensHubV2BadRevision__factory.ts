/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockLensHubV2BadRevision,
  MockLensHubV2BadRevisionInterface,
} from "../MockLensHubV2BadRevision";

const _abi = [
  {
    inputs: [],
    name: "CannotInitImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerOrApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "burnWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdditionalValue",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [],
    name: "getDomainSeparator",
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
    name: "getState",
    outputs: [
      {
        internalType: "enum DataTypes.ProtocolState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mintTimestampOf",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permitForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "setAdditionalValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sigNonces",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenDataOf",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "mintTimestamp",
            type: "uint96",
          },
        ],
        internalType: "struct IERC721Time.TokenData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526000600b5534801561001557600080fd5b50306080526080516120f56100356000396000610f7b01526120f56000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063c0da9bcd11610097578063e985e9c511610071578063e985e9c5146103d8578063ed24911d14610414578063f990ccd71461041c578063fe4b84df1461043c57600080fd5b8063c0da9bcd14610372578063c87b56dd146103b2578063dd69cdb1146103c557600080fd5b806389028a13116100d357806389028a131461033157806395d89b4114610344578063a22cb4651461034c578063b88d4fde1461035f57600080fd5b806370a08231146103035780637ef67f991461031657806385e922e71461032957600080fd5b80632f745c5911610166578063493830a411610140578063493830a4146102b75780634f6ccce7146102ca57806350ddf35c146102dd5780636352211e146102f057600080fd5b80632f745c591461027e57806342842e0e1461029157806342966c68146102a457600080fd5b8063095ea7b3116101a2578063095ea7b31461023157806318160ddd146102465780631865c57d1461025857806323b872dd1461026b57600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063081812fc14610206575b600080fd5b6101dc6101d7366004611a5c565b61044f565b60405190151581526020015b60405180910390f35b6101f961047a565b6040516101e89190611ad1565b610219610214366004611ae4565b61050c565b6040516001600160a01b0390911681526020016101e8565b61024461023f366004611b19565b6105a6565b005b6008545b6040519081526020016101e8565b600c5460ff166040516101e89190611b43565b610244610279366004611b6b565b6106bc565b61024a61028c366004611b19565b6106ed565b61024461029f366004611b6b565b610783565b6102446102b2366004611ae4565b61079e565b6102446102c5366004611ae4565b601755565b61024a6102d8366004611ae4565b6107d1565b61024a6102eb366004611ae4565b610864565b6102196102fe366004611ae4565b6108fa565b61024a610311366004611ba7565b610971565b610244610324366004611bda565b6109f8565b60175461024a565b61024461033f366004611c27565b610b0d565b6101f9610c1d565b61024461035a366004611c7c565b610c2c565b61024461036d366004611cf6565b610c94565b610385610380366004611ae4565b610ccc565b6040805182516001600160a01b031681526020928301516001600160601b031692810192909252016101e8565b6101f96103c0366004611ae4565b610d9a565b6102446103d3366004611db6565b610e82565b6101dc6103e6366004611dda565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61024a610f68565b61024a61042a366004611ba7565b600a6020526000908152604090205481565b61024461044a366004611ae4565b610f77565b60006001600160e01b0319821663780e9d6360e01b1480610474575061047482610fed565b92915050565b60606000805461048990611e04565b80601f01602080910402602001604051908101604052809291908181526020018280546104b590611e04565b80156105025780601f106104d757610100808354040283529160200191610502565b820191906000526020600020905b8154815290600101906020018083116104e557829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661058a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105b1826108fa565b9050806001600160a01b0316836001600160a01b0316141561061f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610581565b336001600160a01b038216148061063b575061063b81336103e6565b6106ad5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610581565b6106b7838361103d565b505050565b6106c633826110ab565b6106e25760405162461bcd60e51b815260040161058190611e39565b6106b78383836111a2565b60006106f883610971565b821061075a5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610581565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6106b783838360405180602001604052806000815250610c94565b6107a833826110ab565b6107c557604051636d8a29e760e11b815260040160405180910390fd5b6107ce8161134d565b50565b60006107dc60085490565b821061083f5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610581565b6008828154811061085257610852611e8a565b90600052602060002001549050919050565b600081815260026020526040812054600160a01b90046001600160601b0316806108eb5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a206d696e742074696d657374616d7020717565727920666f72604482015271103737b732bc34b9ba32b73a103a37b5b2b760711b6064820152608401610581565b6001600160601b031692915050565b6000818152600260205260408120546001600160a01b0316806104745760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610581565b60006001600160a01b0382166109dc5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610581565b506001600160a01b031660009081526003602052604090205490565b6001600160a01b038316610a1f576040516307eb16dd60e21b815260040160405180910390fd5b6000610a2a836108fa565b90506000610a366113e9565b6001600160a01b038381166000908152600a602090815260409182902080546001810190915582517f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad81840152938a168484015260608085018a9052608085019190915287013560a0808501919091528251808503909101815260c084019092528151910120610ac9929160e001611ea0565b604051602081830303815290604052805190602001209050610afc818385803603810190610af79190611ebb565b61147e565b610b06858561103d565b5050505050565b6001600160a01b038316610b34576040516307eb16dd60e21b815260040160405180910390fd5b6000610b3e6113e9565b6001600160a01b038681166000818152600a602090815260409182902080546001810190915582517f47ab88482c90e4bb94b82a947ae78fa91fb25de1469ab491f4c15b9a0a2677ee9281019290925291810192909252918716606080830191909152861515608083015260a08201929092529084013560c082015260e00160405160208183030381529060405280519060200120604051602001610be4929190611ea0565b604051602081830303815290604052805190602001209050610c12818684803603810190610af79190611ebb565b610b06858585611562565b60606001805461048990611e04565b6001600160a01b038216331415610c855760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610581565b610c90338383611562565b5050565b610c9e33836110ab565b610cba5760405162461bcd60e51b815260040161058190611e39565b610cc6848484846115cf565b50505050565b60408051808201909152600080825260208201526000828152600260205260409020546001600160a01b0316610d5b5760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a20746f6b656e206461746120717565727920666f72206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610581565b506000908152600260209081526040918290208251808401909352546001600160a01b0381168352600160a01b90046001600160601b03169082015290565b6000818152600260205260409020546060906001600160a01b0316610e195760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610581565b6000610e3060408051602081019091526000815290565b90506000815111610e505760405180602001604052806000815250610e7b565b80610e5a84611602565b604051602001610e6b929190611f30565b6040516020818303038152906040525b9392505050565b6000610e8d836108fa565b90506000610e996113e9565b6001600160a01b0383166000908152600a60209081526040918290208054600181019091559151610f0a927f108ccda6d7331b00561a3eea66a2ae331622356585681c62731e4a01aae2261a92899260608a0135910193845260208401929092526040830152606082015260800190565b60405160208183030381529060405280519060200120604051602001610f31929190611ea0565b604051602081830303815290604052805190602001209050610f5f818385803603810190610af79190611ebb565b610cc68461134d565b6000610f726113e9565b905090565b60017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316301415610fc3576040516325c7410560e21b815260040160405180910390fd5b600b548111610fe5576040516302ed543d60e51b815260040160405180910390fd5b600b55601755565b60006001600160e01b031982166380ac58cd60e01b148061101e57506001600160e01b03198216635b5e139f60e01b145b8061047457506301ffc9a760e01b6001600160e01b0319831614610474565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190611072826108fa565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166111245760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610581565b600061112f836108fa565b9050806001600160a01b0316846001600160a01b0316148061116a5750836001600160a01b031661115f8461050c565b6001600160a01b0316145b8061119a57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166111b5826108fa565b6001600160a01b03161461121d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610581565b6001600160a01b03821661127f5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610581565b61128a838383611700565b61129560008261103d565b6001600160a01b03831660009081526003602052604081208054600192906112be908490611f75565b90915550506001600160a01b03821660009081526003602052604081208054600192906112ec908490611f8c565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000611358826108fa565b905061136681600084611700565b61137160008361103d565b6001600160a01b038116600090815260036020526040812080546001929061139a908490611f75565b9091555050600082815260026020526040808220829055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61141461047a565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b42816060015110156114a357604051630819bdcd60e01b815260040160405180910390fd5b6000600184836000015184602001518560400151604051600081526020016040526040516114ed949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa15801561150f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615806115445750826001600160a01b0316816001600160a01b031614155b15610cc6576040516337e8456b60e01b815260040160405180910390fd5b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6115da8484846111a2565b6115e6848484846117b8565b610cc65760405162461bcd60e51b815260040161058190611fa4565b6060816116265750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611650578061163a81611ff6565b91506116499050600a83612027565b915061162a565b60008167ffffffffffffffff81111561166b5761166b611caf565b6040519080825280601f01601f191660200182016040528015611695576020820181803683370190505b5090505b841561119a576116aa600183611f75565b91506116b7600a8661203b565b6116c2906030611f8c565b60f81b8183815181106116d7576116d7611e8a565b60200101906001600160f81b031916908160001a9053506116f9600a86612027565b9450611699565b6001600160a01b03831661175b5761175681600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b61177e565b816001600160a01b0316836001600160a01b03161461177e5761177e83826118b6565b6001600160a01b038216611795576106b781611953565b826001600160a01b0316826001600160a01b0316146106b7576106b78282611a02565b60006001600160a01b0384163b156118ab57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906117fc90339089908890889060040161204f565b6020604051808303816000875af1925050508015611837575060408051601f3d908101601f191682019092526118349181019061208c565b60015b611891573d808015611865576040519150601f19603f3d011682016040523d82523d6000602084013e61186a565b606091505b5080516118895760405162461bcd60e51b815260040161058190611fa4565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061119a565b506001949350505050565b600060016118c384610971565b6118cd9190611f75565b600083815260076020526040902054909150808214611920576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061196590600190611f75565b6000838152600960205260408120546008805493945090928490811061198d5761198d611e8a565b9060005260206000200154905080600883815481106119ae576119ae611e8a565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806119e6576119e66120a9565b6001900381819060005260206000200160009055905550505050565b6000611a0d83610971565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b0319811681146107ce57600080fd5b600060208284031215611a6e57600080fd5b8135610e7b81611a46565b60005b83811015611a94578181015183820152602001611a7c565b83811115610cc65750506000910152565b60008151808452611abd816020860160208601611a79565b601f01601f19169290920160200192915050565b602081526000610e7b6020830184611aa5565b600060208284031215611af657600080fd5b5035919050565b80356001600160a01b0381168114611b1457600080fd5b919050565b60008060408385031215611b2c57600080fd5b611b3583611afd565b946020939093013593505050565b6020810160038310611b6557634e487b7160e01b600052602160045260246000fd5b91905290565b600080600060608486031215611b8057600080fd5b611b8984611afd565b9250611b9760208501611afd565b9150604084013590509250925092565b600060208284031215611bb957600080fd5b610e7b82611afd565b600060808284031215611bd457600080fd5b50919050565b600080600060c08486031215611bef57600080fd5b611bf884611afd565b925060208401359150611c0e8560408601611bc2565b90509250925092565b80358015158114611b1457600080fd5b60008060008060e08587031215611c3d57600080fd5b611c4685611afd565b9350611c5460208601611afd565b9250611c6260408601611c17565b9150611c718660608701611bc2565b905092959194509250565b60008060408385031215611c8f57600080fd5b611c9883611afd565b9150611ca660208401611c17565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611cee57611cee611caf565b604052919050565b60008060008060808587031215611d0c57600080fd5b611d1585611afd565b93506020611d24818701611afd565b935060408601359250606086013567ffffffffffffffff80821115611d4857600080fd5b818801915088601f830112611d5c57600080fd5b813581811115611d6e57611d6e611caf565b611d80601f8201601f19168501611cc5565b91508082528984828501011115611d9657600080fd5b808484018584013760008482840101525080935050505092959194509250565b60008060a08385031215611dc957600080fd5b82359150611ca68460208501611bc2565b60008060408385031215611ded57600080fd5b611df683611afd565b9150611ca660208401611afd565b600181811c90821680611e1857607f821691505b60208210811415611bd457634e487b7160e01b600052602260045260246000fd5b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b61190160f01b81526002810192909252602282015260420190565b600060808284031215611ecd57600080fd5b6040516080810181811067ffffffffffffffff82111715611ef057611ef0611caf565b604052823560ff81168114611f0457600080fd5b808252506020830135602082015260408301356040820152606083013560608201528091505092915050565b60008351611f42818460208801611a79565b835190830190611f56818360208801611a79565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611f8757611f87611f5f565b500390565b60008219821115611f9f57611f9f611f5f565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600060001982141561200a5761200a611f5f565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261203657612036612011565b500490565b60008261204a5761204a612011565b500690565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061208290830184611aa5565b9695505050505050565b60006020828403121561209e57600080fd5b8151610e7b81611a46565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220df2de5deeaeeacc596bf5dda9d41b5990db0421217206216ff1c3cba627b3d7c64736f6c634300080a0033";

type MockLensHubV2BadRevisionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockLensHubV2BadRevisionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockLensHubV2BadRevision__factory extends ContractFactory {
  constructor(...args: MockLensHubV2BadRevisionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockLensHubV2BadRevision> {
    return super.deploy(overrides || {}) as Promise<MockLensHubV2BadRevision>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockLensHubV2BadRevision {
    return super.attach(address) as MockLensHubV2BadRevision;
  }
  connect(signer: Signer): MockLensHubV2BadRevision__factory {
    return super.connect(signer) as MockLensHubV2BadRevision__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockLensHubV2BadRevisionInterface {
    return new utils.Interface(_abi) as MockLensHubV2BadRevisionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockLensHubV2BadRevision {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockLensHubV2BadRevision;
  }
}
