---
title: CosmWasmSigningClient
nav_order: 4
---

# CosmWasmSigningClient

## About
The class `CosmWasmSigningClient` is exported from the CosmJS package `@cosmjs/cosmwasm-stargate` (🔗 [Link](https://github.com/cosmos/cosmjs/tree/main/packages/cosmwasm-stargate)). 

`CosmWasmSigningClient` extends `CosmWasmClient`, so all methods described in the 🔗 [CosmWasmClient documentation ](CosmWasmClient.md) work here too.

This client is used to work with signed transactions. To instantiate it, a wallet must be connected. For this, please refer to the setup documentation.

## Usage

```ts
/**
 * This example is using CosmWasmJS' helper method
 * to connect to a keplr wallet.
 * For alternate setup methods checkout the docs.
 */

import { setupWebKeplr } from "cosmwasm";

// Configs
const config = {
    chainId: 'cliffnet-1',
    rpcEndpoint: 'https://rpc.cliffnet.cosmwasm.com:443/',
    prefix: 'wasm'
}


async function main() {
  const client = await setupWebKeplr(config);
  console.log(client);
}

main();
```

# Available Methods

## Signing
>**.signAndBroadcast()**
>
> Signs the given message and broadcasts it to the blockchain.
>
>*Params: (signerAddress: string, messages: readonly EncodeObject[], fee: StdFee | "auto" | number, memo = "")*

>**.sign()**
>
> Signs the given message without broadcasting it.
>
>*Params: (signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, explicitSignerData?: SignerData)*