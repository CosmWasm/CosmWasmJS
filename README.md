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

### Get a read-only cosmwasm client

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

### Create a wallet and a signing stargate client

```ts
import { SigningCosmWasmClient, Secp256k1HdWallet } from "cosmwasm";

// This is your rpc endpoint
const rpcEndpoint = "https://rpc.cliffnet.cosmwasm.com:443/";

// Using a random generated mnemonic
const mnemonic = "rifle same bitter control garage duck grab spare mountain doctor rubber cook";

async function main() {

  // Create a wallet
  const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic);

  // Using
  const client = await SigningCosmWasmClient.connectWithSigner(
    rpcEndpoint,
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
const contractAddr = "wasm19qws2lfd8pskyn0cfgpl5yjjyq3msy5402qr8nkzff9kdnkaepyqycedfh";

async function main() {
  const client = await CosmWasmClient.connect(rpcEndpoint);
  const config = await client.queryContractSmart(contractAddr, { config: {} });

  console.log(config);
}

main();
```
