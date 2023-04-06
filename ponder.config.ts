import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
  networks: [
    {
      name: "sepolia",
      chainId: 11155111,
      rpcUrl: process.env.PONDER_RPC_URL_11155111,
    },
  ],
  contracts: [
    {
      name: "EAS",
      network: "sepolia",
      abi: "./abis/EAS.json",
      address: "0xc2679fbd37d54388ce493f1db75320d236e1815e",
      startBlock: 2958571,
    },
  ],
};
