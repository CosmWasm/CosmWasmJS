---
title: Setup
nav_order: 1
parent: CosmWasmSigningClient
grand_parent: Writing
---

# Setup of CosmWasmSigningClient

## Setup functions

CosmWasmJS is not only a wrapper around CosmJS, but also brings some
preconfigured functions to simplify the setup of SigningClient.

Basically there are currently 4 different setup functions:

| Function        | Description                                                                                                                                                                                   |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setupWebKeplr   | Probably the most frequently used feature in web-based dApps. Returns a client after the user has verified himself in Keplr. Throws a console error if Keplr is not installed in the browser. |
| setupWebLedger  | This function is used to log in to web-based dApps with a ledger. (Without Keplr)                                                                                                             |
| setupNodeLocal  | Herewith a local mnemonic can be used for signing.                                                                                                                                            |
| setupNodeLedger | With the help of this function, a ledger device can be used in a node environment.                                                                                                            |

## Configuration

All the above functions initially share the following configuration interface:

```ts
// Configs
const config = {
  chainId: "cliffnet-1",
  rpcEndpoint: "https://rpc.cliffnet.cosmwasm.com:443/",
  prefix: "wasm",
};
```

## Usage

### Setup Web/Keplr

To get a CosmWasmSigningClient with Keplr, you don't need additional params.

```ts
import { setupWebKeplr } from "cosmwasm";

// Configs
const config = {
  chainId: "cliffnet-1",
  rpcEndpoint: "https://rpc.cliffnet.cosmwasm.com:443/",
  prefix: "wasm",
};

async function getClient() {
  return await setupWebKeplr(config);
}
```

### Setup Web/Ledger

To work with a ledger, the following additional NPM package must be installed:
[@ledgerhq/hw-transport-webusb](https://www.npmjs.com/package/@ledgerhq/hw-transport-webusb)
.

```ts
import { setupWebLedger } from "cosmwasm";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";

// Configs
const config = {
  chainId: "cliffnet-1",
  rpcEndpoint: "https://rpc.cliffnet.cosmwasm.com:443/",
  prefix: "wasm",
};

async function getClient() {
  return await setupWebLedger(config, TransportWebUSB);
}
```

### Setup Node/Local

To work with a local mnemonic, it must be provided:

```ts
import { setupNodeLocal } from "cosmwasm";

// Configs
const config = {
  chainId: "cliffnet-1",
  rpcEndpoint: "https://rpc.cliffnet.cosmwasm.com:443/",
  prefix: "wasm",
};

const mnemonic =
  "lazy year exact gap stem search zero endless question since frost away gaze bike destroy";

async function getClient() {
  return await setupWebKeplr(config, mnemonic);
}
```

### Setup Node/Ledger
To work with a ledger, the following additional NPM package must be installed:
[@ledgerhq/hw-transport-node-hid](https://www.npmjs.com/package/@ledgerhq/hw-transport-node-hid)

```ts
import { setupWebLedger } from "cosmwasm";
import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";

// Configs
const config = {
  chainId: "cliffnet-1",
  rpcEndpoint: "https://rpc.cliffnet.cosmwasm.com:443/",
  prefix: "wasm",
};

async function getClient() {
  return await setupWebLedger(config, TransportNodeHid);
}
```