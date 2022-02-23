---
title: Transaction Queries
parent: Advanced Queries
grand_parent: Reading
nav_order: 8
---

# Transaction queries

## Create a queryClient

```ts
// Instantiate tmClient
const tmClient = await Tendermint34Client.connect(rpcUrl);

// Create client with authExtension
const client = QueryClient.withExtensions(tmClient, setupAuthExtension);
```

## Available query methods

| Method    | Description | Params          |
| :-------- | :---------- | :-------------- |
| .tx.getTx |             |  *txId: string* |

🔗 [Back to query overview](index.md)
