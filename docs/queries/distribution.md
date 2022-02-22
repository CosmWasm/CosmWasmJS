---
title: Distribution Queries
parent: Queries
grand_parent: CosmWasmClient
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
>
>**.distribution.communityPool**
>*Params: ()*
>
>**.distribution.delegationRewards**
>*Params:  (delegatorAddress: string, validatorAddress: string)*
>
>**.distribution.delegationTotalRewards**
>*Params:  (delegatorAddress: string)*
>
>**.distribution.delegatorValidators**
>*Params:  (delegatorAddress: string)*
>
>**.distribution.delegatorWithdrawAddress**
>*Params:  (delegatorAddress: string)*
>
>**.distribution.params**
>*Params:  ()*
>
>**.distribution.validatorCommission**
>*Params:  (validatorAddress: string)*
>
>**.distribution.validatorOutstandingRewards**
>*Params:  (validatorAddress: string)*
>
>**.distribution.validatorSlashes** 
>*Params:  (validatorAddress: string, startingHeight: number,endingHeight: number, paginationKey?:Uint8Array)*

🔗 [Back to query overview](index.md)