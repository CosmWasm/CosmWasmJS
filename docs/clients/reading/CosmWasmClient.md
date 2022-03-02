---
title: CosmWasmClient
nav_order: 1
parent: Reading
---

# CosmWasmClient

## About

The class `CosmWasmClient` is exported from the CosmJS package
`@cosmjs/cosmwasm-stargate` (🔗
[Link](https://github.com/cosmos/cosmjs/tree/main/packages/cosmwasm-stargate)).
It already comes with a handful of methods that can be used to execute
frequently used queries.

It is used only to execute queries. **NOT** to work with signed transactions. If
you are looking for the documentation for this, please see the 🔗
[CosmWasmSigningClient documentation](../writing/CosmWasmSigningClient/index.md).

To execute extended queries, please refer to the 🔗
[Query documentation](queries/index.md).

## Usage

```ts
import { CosmWasmClient } from "cosmwasm";

// This is your rpc endpoint
const rpcEndpoint = "https://rpc.cliffnet.cosmwasm.com:443/";

async function main() {
  const client = await CosmWasmClient.connect(rpcEndpoint);
  console.log(client);‚
}

main();
```

# Available Methods

## General

| Method         | Description                            | Params                                 |
| :------------- | :------------------------------------- | :------------------------------------- |
| .connect()     | Returns the client.                    | _tmClient: Tendermint34Client_         |
| .getChainId()  | Get current chain's ID.                | _none_                                 |
| .getHeight()   | Get current height of the chain.       | _none_                                 |
| .getAccount()  | Get more information about an account. | _searchAddress: string_                |
| .getSequence() |                                        | _address: string_                      |
| .getBlock()    |                                        | _height?: number_                      |
| .getBalance()  |                                        | _address: string, searchDenom: string_ |

## Transactions

| Method      | Description | Params                                              |
| :---------- | :---------- | :-------------------------------------------------- |
| .getTx()    |             | _id: string_                                        |
| .searchTx() |             | _query: SearchTxQuery, filter: SearchTxFilter = {}_ |
| .txsQuery() |             | _query: string_                                     |

## Codes

| Method            | Description | Params           |
| :---------------- | :---------- | :--------------- |
| .getCodes()       |             | _none_           |
| .getCodeDetails() |             | _codeId: number_ |

## Smart Contracts

| Method                | Description | Params                                               |
| :-------------------- | :---------- | :--------------------------------------------------- |
| .getContracts()       |             | _cideId: number_                                     |
| .getContract()        |             | _address: string_                                    |
| .queryContractRaw()   |             | _address: string, key: Uint8Array_                   |
| .queryContractSmart() |             | _address: string, queryMsg: Record<string, unknown>_ |
