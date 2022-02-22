---
title: CosmWasmClient
nav_order: 3
---

# CosmWasmClient

## About
The class `CosmWasmClient` is exported from the CosmJS package `@cosmjs/cosmwasm-stargate` (🔗 [Link](https://github.com/cosmos/cosmjs/tree/main/packages/cosmwasm-stargate)).  It already comes with a handful of methods that can be used to execute frequently used queries.

It is used only to execute queries. **NOT** to work with signed transactions. If you are looking for the documentation for this, please see the 🔗 [CosmWasmSigningClient documentation](CosmWasmSigningClient.md).

To execute extended queries, please refer to the 🔗 [Query documentation](../queries/index.md).

## Usage

```ts
import { CosmWasmClient } from "cosmwasm";

// This is your rpc endpoint
const rpcEndpoint = "https://rpc.cliffnet.cosmwasm.com:443/";

async function main() {
  const client = await CosmWasmClient.connect(rpcEndpoint);
  console.log(client);
}

main();
```

# Available Methods

## General
>**.connect()**
>
> Returns the client.
>
>*Params: (tmClient: Tendermint34Client)*

>**.getChainId()**
>
> Get current chain's ID.
>
>*Params: none*

>**.getHeight()**
>
> Get current height of the chain.
>
>*Params: none*

>**.getAccount()**
>
> Get more information about an account.
>
>*Params: (searchAddress: string)*

>**.getSequence()**
>
>*Params: (address: string)*

>**.getBlock()**
>
>*Params: (height?: number)*

>**.getBalance()**
>
>*Params: (address: string, searchDenom: string)*


## Transactions

>**.getTx()**
>
>*Params: (id: string)*

>**.searchTx()**
>
>*Params: (query: SearchTxQuery, filter: SearchTxFilter = {})*

>**.txsQuery()**
>
>*Params: (query: string)*

## Codes

>**.getCodes()**
>
>*Params: (none)*

>**.getCodeDetails()**
>
>*Params: (codeId: number)*

## Smart Contracts

>**.getContracts()**
>
>*Params: (cideId: number)*

>**.getContract()**
>
>*Params: (address: string)*

>**.queryContractRaw()**
>
>*Params: (address: string, key: Uint8Array)*

>**.queryContractSmart()**
>
>*Params: (address: string, queryMsg: Record<string, unknown>)*


