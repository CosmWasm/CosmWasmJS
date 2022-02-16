<h1><p align="center"><img alt="CosmJS" src="docs/logo.png" width="180" /></p></h1>

<div align="center">
  <a href="https://www.npmjs.com/package/cosmwasm"><img alt="npm" src="https://img.shields.io/npm/v/cosmwasm.svg"/></a>
</div>

## About

Cosmwasm.js was created to help new developers get started with their first
dApps. It is just a wrapper package to easily import needed features from
CosmJS.

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
const mnemonic =
  "rifle same bitter control garage duck grab spare mountain doctor rubber cook";

async function main() {
  // Create a wallet
  const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic);

  // Using
  const client = await SigningCosmWasmClient.connectWithSigner(
    rpcEndpoint,
    wallet,
  );
  console.log(client);
}

main();
```

### Connect with keplr and get a signing starget client

```ts
import { setupWebKeplr } from "cosmwasm";

const config = {
  chainId: "cliffnet-1",
  rpcEndpoint: "https://rpc.cliffnet.cosmwasm.com:443/",
  prefix: "wasm",
};

async function main() {
  const client = await setupWebKeplr(config);
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
const contractAddr =
  "wasm19qws2lfd8pskyn0cfgpl5yjjyq3msy5402qr8nkzff9kdnkaepyqycedfh";

async function main() {
  const client = await CosmWasmClient.connect(rpcEndpoint);
  const config = await client.queryContractSmart(contractAddr, { config: {} });

  console.log(config);
}

main();
```
