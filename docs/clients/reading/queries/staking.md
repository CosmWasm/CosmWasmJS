---
title: Staking Queries
parent: Advanced Queries
grand_parent: Reading
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

| Method                                 | Description | Params                                                                                                                     |
| :------------------------------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------- |
| .staking.delegation                    |             | _(delegatorAddress: string, validatorAddress: string)_                                                                     |
| .staking.delegatorDelegations          |             | _(delegatorAddress: string,paginationKey?: Uint8Array)_                                                                    |
| .staking.delegatorUnbondingDelegations |             | _(delegatorAddress: string,paginationKey?: Uint8Array)_                                                                    |
| .staking.delegatorValidator            |             | _(delegatorAddress: string,validatorAddress: string)_                                                                      |
| .staking.delegatorValidators           |             | _(delegatorAddress: string,paginationKey?: Uint8Array)_                                                                    |
| .staking.historicalInfo                |             | _(height: number)_                                                                                                         |
| .staking.params                        |             | _none_                                                                                                                     |
| .staking.pool                          |             | _none_                                                                                                                     |
| .staking.redelegations                 |             | _(delegatorAddress: string,sourceValidatorAddress: string,destinationValidatorAddress: string,paginationKey?: Uint8Array)_ |
| .staking.unbondingDelegation           |             | _(delegatorAddress: string,validatorAddress: string)_                                                                      |
| .staking.validator                     |             | _(validatorAddress: string)_                                                                                               |
| .staking.validatorDelegations          |             | _(validatorAddress: string,paginationKey?: Uint8Array)_                                                                    |
| .staking.validators                    |             | _(status: BondStatusString, paginationKey?: Uint8Array)_                                                                   |
| .staking.validatorUnbondingDelegations |             | _(validatorAddress: string,paginationKey?: Uint8Array)_                                                                    |

🔗 [Back to query overview](index.md)
