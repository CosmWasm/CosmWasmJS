---
title: Distribution Queries
parent: Advanced Queries
grand_parent: Reading
nav_order: 3
---

# Distribution queries

## Create a queryClient

```ts
// Instantiate tmClient
const tmClient = await Tendermint34Client.connect(rpcUrl);

// Create client with distributionExtension
const client = QueryClient.withExtensions(tmClient, setupDistributionExtension);
```

## Available query methods

| Method                                    | Description | Params                                                                                             |
| :---------------------------------------- | :---------- | :------------------------------------------------------------------------------------------------- |
| .distribution.communityPool               |             | _none_                                                                                             |
| .distribution.delegationRewards           |             | _delegatorAddress: string, validatorAddress: string_                                               |
| .distribution.delegationTotalRewards      |             | _delegatorAddress: string_                                                                         |
| .distribution.delegatorValidators         |             | _delegatorAddress: string_                                                                         |
| .distribution.delegatorWithdrawAddress    |             | _delegatorAddress: string_                                                                         |
| .distribution.params                      |             | _none_                                                                                             |
| .distribution.validatorCommission         |             | _validatorAddress: string_                                                                         |
| .distribution.validatorOutstandingRewards |             | _validatorAddress: string_                                                                         |
| .distribution.validatorSlashes            |             | _validatorAddress: string, startingHeight: number,endingHeight: number, paginationKey?:Uint8Array_ |

🔗 [Back to query overview](index.md)
