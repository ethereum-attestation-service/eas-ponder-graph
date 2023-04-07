import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
  networks: [
    // {
    //   name: "sepolia",
    //   chainId: 11155111,
    //   rpcUrl: process.env.PONDER_RPC_URL_11155111,
    // },
    {
      name: "mainnet",
      chainId: 1,
      rpcUrl: process.env.PONDER_RPC_URL_1,
    },
  ],
  contracts: [
    // {
    //   name: "EAS",
    //   network: "sepolia",
    //   abi: "./abis/EAS.json",
    //   address: "0xc2679fbd37d54388ce493f1db75320d236e1815e",
    //   startBlock: 2958571,
    // },
    // {
    //   name: "SchemaRegistry",
    //   network: "sepolia",
    //   abi: "./abis/SchemaRegistry.json",
    //   address: "0x0a7e2ff54e76b8e6659aedc9103fb21c038050d0",
    //   startBlock: 2958571,
    // },
    {
      name: "EAS",
      network: "mainnet",
      abi: "./abis/EAS.json",
      address: "0xa1207f3bba224e2c9c3c6d5af63d0eb1582ce587",
      startBlock: 16756728,
    },
    {
      name: "SchemaRegistry",
      network: "mainnet",
      abi: "./abis/SchemaRegistry.json",
      address: "0xa7b39296258348c78294f95b872b282326a97bdf",
      startBlock: 16756728,
    },
  ],
};
