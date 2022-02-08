# cosmwasm.js

[![npm version](https://img.shields.io/npm/v/cosmwasm.svg)](https://www.npmjs.com/package/cosmwasm)

## About

Cosmwasm.js was created to help new developers get started with their first dApps.
It is just a wrapper package to easily import needed features from CosmJs.

## Get started

### Installation

**NPM**

`npm install cosmwasm`

**Yarn**

`yarn add cosmwasm`

## Usage

### Get a read-only stargate client

```ts
import { StargateClient } from "cosmwasm";

// This is your rpc endpoint
const endpoint = "https://rpc.cliffnet.cosmwasm.com:443/";

async function main() {
  const client = await StargateClient.connect(endpoint);
  console.log(client);
}

main();
```

### Get a signing stargate client

```ts
import { StargateSigningClient } from "cosmwasm";

// This is your rpc endpoint
const endpoint = "https://rpc.cliffnet.cosmwasm.com:443/";

async function main() {
  const client = await StargateClient.connect(endpoint);
  console.log(client);
}

main();
```

### Interacting with contracts

```ts
import { StargateSigningClient } from "cosmwasm";

// This is your rpc endpoint
const endpoint = "https://rpc.cliffnet.cosmwasm.com:443/";

// This is your contract address
const contractAddr = "wasm123";

async function main() {
  const client = await CosmWasmClient.connect(endpoint);
  const config = await client.queryContractSmart(contractAddr, { config: {} });

  console.log(config);
}

main();
```
