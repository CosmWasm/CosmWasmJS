---
title: Bank Queries
parent: Advanced Queries
grand_parent: Reading
nav_order: 2
---

# Bank queries

## Create a queryClient

```ts
// Instantiate tmClient
const tmClient = await Tendermint34Client.connect(rpcUrl);

// Create client with bankExtension
const client = QueryClient.withExtensions(tmClient, setupBankExtension);
```

## Available query methods

| Method               | Description | Params                           |
| :------------------- | :---------- | :------------------------------- |
| .auth.account        |             | _address: string_                |
| .bank.balance        |             | _address: string, denom: string_ |
| .bank.allBalances    |             | _address: string_                |
| .bank.totalSupply    |             | _none_                           |
| .bank.supplyOf       |             | _denom: string_                  |
| .bank.denomMetadata  |             | _denom: string_                  |
| .bank.denomsMetadata |             | _none_                           |

🔗 [Back to query overview](index.md)
