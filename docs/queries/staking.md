---
title: Staking Queries
parent: Queries
grand_parent: CosmWasmClient
nav_order: 7
---
# Staking queries

## Create a queryClient

```ts
  // Instantiate tmClient
  const tmClient = await Tendermint34Client.connect(rpcUrl);

  // Create client with stakingExtension
  const client = QueryClient.withExtensions(tmClient, setupStakingExtension);
```

## Available query methods


>**.staking.delegation**
>*Params: (delegatorAddress: string, validatorAddress: string)*
>
>**.staking.delegatorDelegations**
>*Params: (delegatorAddress: string,paginationKey?: Uint8Array)*
>
>**.staking.delegatorUnbondingDelegations**
>*Params: (delegatorAddress: string,paginationKey?: Uint8Array)*
>
>**.staking.delegatorValidator**
>*Params: (delegatorAddress: string,validatorAddress: string)*
>
>**.staking.delegatorValidators**
>*Params: (delegatorAddress: string,paginationKey?: Uint8Array)*
>
>**.staking.historicalInfo**
>*Params: (height: number)* 
>
>**.staking.params**
>*Params: none*
>
>**.staking.pool**
>*Params: none* 
>
>**.staking.redelegations**
>*Params: (delegatorAddress: string,sourceValidatorAddress: string,destinationValidatorAddress: string,paginationKey?: Uint8Array)*
>
>**.staking.unbondingDelegation**
>*Params: (delegatorAddress: string,validatorAddress: string)*
>
>**.staking.validator**
>*Params: (validatorAddress: string)*
>
>**.staking.validatorDelegations**
>*Params: (validatorAddress: string,paginationKey?: Uint8Array)*
>
>**.staking.validators**
>*Params: (status: BondStatusString, paginationKey?: Uint8Array)*
>
>**.staking.validatorUnbondingDelegations**
>*Params: (validatorAddress: string,paginationKey?: Uint8Array)*

🔗 [Back to query overview](index.md)