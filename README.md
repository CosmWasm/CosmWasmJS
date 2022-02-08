# cosmwasm.js

[![npm version](https://img.shields.io/npm/v/cosmwasm.svg)](https://www.npmjs.com/package/cosmwasm)

## About

Cosmwasm.js was created to help new developers get started with their first dApps.
It is just a wrapper package to easily import needed features from CosmJS.

## Get started

### Installation

**NPM**

`npm install cosmwasm`

**Yarn**

`yarn add cosmwasm`

## Usage

### Get a read-only stargate client

```ts
import { CosmWasmClient } from "cosmwasm";

// This is your rpc endpoint
const rpcEndpoint = "https://rpc.cliffnet.cosmwasm.com:443/";

async function main() {
  const client = await CosmWasmClient.connect(endpoint);
  console.log(client);
}

main();
```

### Create a wallet and a signing stargate client

```ts
import { StargateSigningClient, Secp256k1HdWallet } from "cosmwasm";

// This is your rpc endpoint
const rpcEndpoint = "https://rpc.cliffnet.cosmwasm.com:443/";

// Using a random generated mnemonic
const mnemonic = "rifle same bitter control garage duck grab spare mountain doctor rubber cook";

async function main() {

  // Create a wallet
  const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic);

  // Using
  const client = await StargateSigningClient.connectWithSigner(
    endpoint,
    wallet
  );
  console.log(client);
}

main();
```

### Interacting with contracts

```ts
import { CosmWasmClient } from "cosmwasm";

// This is your rpc endpoint
const rpcEndpoint = "https://rpc.cliffnet.cosmwasm.com:443/";

// This is your contract address
const contractAddr = "wasm123";

async function main() {
  const client = await CosmWasmClient.connect(endpoint);
  const config = await client.queryContractSmart(contractAddr, { config: {} });

  console.log(config);
}

main();
```
