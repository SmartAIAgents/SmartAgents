/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRUNE,
  IRUNEInterface,
} from "../../../contracts/THORChain_Router.sol/IRUNE";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferTo",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRUNE__factory {
  static readonly abi = _abi;
  static createInterface(): IRUNEInterface {
    return new utils.Interface(_abi) as IRUNEInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IRUNE {
    return new Contract(address, _abi, signerOrProvider) as IRUNE;
  }
}
