# Get Started

## Installation

**Yarn**
`yarn add cosmwasm`

**NPM**
`npm i cosmwasm`

So your `package.json` should look like:

```json
{
  "name": "cosmwasm",
  "version": "1.0.0",
  "description": "Your Project",
  "dependencies": {
    "cosmwasm": "latest",
    ...
  },
  ...
}
```

# Basics

## Clients

You don't need to do any configuration to get started. It is only important to understand when you need to import which symbols from the package.

Basically there are 2 different clients:
- **CosmWasmClient**
This client can only read. You do not need to have a wallet to instantiate this one. Only an rpcUrl is needed. For a more detailed description please refer to the 🔗 [CosmWasmClient Docs](/docs/clients/CosmWasmClient.md).

- **CosmWasmSigningClient**
This client can also write. In order to instantiate it, a wallet must be specified in addition to the rpcUrl. To facilitate the instantiation, CosmWasmJS already comes with some setup functions. For a more detailed description please refer to the 🔗 [CosmWasmSigningClient Docs](/docs/clients/CosmWasmSigningClient.md).

## Further Reading
- 🔗 [Query documentation](/docs/queries/overview.md)
- 🔗 [Examples](/docs/examples/overview.md)
