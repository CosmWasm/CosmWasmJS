---
title: Mint Queries
parent: Advanced Queries
grand_parent: Reading
nav_order: 6
---

# Mint queries

## Create a queryClient

```ts
// Instantiate tmClient
const tmClient = await Tendermint34Client.connect(rpcUrl);

// Create client with mintExtension
const client = QueryClient.withExtensions(tmClient, setupMintExtension);
```

## Available query methods

| Method                 | Description | Params         |
| :--------------------- | :---------- | :------------- |
| .mint.param            |             | _none_         |
| .mint.inflation        |             | _Params: none_ |
| .mint.annualProvisions |             | _Params: none_ |

🔗 [Back to query overview](index.md)
