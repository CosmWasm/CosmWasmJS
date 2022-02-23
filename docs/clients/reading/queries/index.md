---
title: Advanced Queries
parent: Reading
nav_order: 2
has_children: true
---

# Queries

If the methods of the CosmWasmClient are no longer sufficient, you can also
instantiate a QueryClient yourself. With the help of various extensions,
different types of queries can be executed.

## Example

```ts
import {
  SigningCosmWasmClient,
  setupStakingExtension,
  QueryClient,
} from "cosmwasm";

// Get all delegations of a delegator
const getAllDelegations = async (delegator, rpcUrl) => {
  // Instantiate tmClient
  const tmClient = await Tendermint34Client.connect(rpcUrl);

  // Create client with stakingExtension
  const client = QueryClient.withExtensions(tmClient, setupStakingExtension);

  return await client?.staking.delegatorDelegations(delegator);
};

const delegations = getAllDelegations("YourDelegatorAddress", "YourRpcUrl");

console.log(delegations);
```

## Extensions

Depending on what query is needed, queries are divided into different
extensions:

- 🔗 [AuthExtension](auth.md) Information about an account
- 🔗 [BankExtension](bank.md) Information about account balances, denoms and
  supply
- 🔗 [DistributionExtension](distribution.md) Information about community pools,
  delagations/delegators and validators
- 🔗 [GovExtension](gov.md) Information about proposals, deposits and votes
- 🔗 [IbcExtension](ibc.md) Information about IBC data
- 🔗 [MintExtension](mint.md) Information about inflation and provisions
- 🔗 [StakingExtension](staking.md) All information about staking related stuff
- 🔗 [TxExtension](tx.md) Information about transactions

🔗 [Back to clients overview](clients.md)
