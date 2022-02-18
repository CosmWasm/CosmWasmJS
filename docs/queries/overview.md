# Queries

## Example

```ts
import {
  SigningCosmWasmClient,
  setupStakingExtension,
  QueryClient,
} from "@cosmwasm";

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

- 🔗 [AuthExtension](/docs/queries/auth.md) Information about an account
- 🔗 [BankExtension](/docs/queries/bank.md) Information about account balances,
  denoms and supply
- 🔗 [DistributionExtension](/docs/queries/distribution.md) Information about
  community pools, delagations/delegators and validators
- 🔗 [GovExtension](/docs/queries/gov.md) Information about proposals, deposits
  and votes
- 🔗 [IbcExtension](/docs/queries/ibc.md) Information about IBC data
- 🔗 [MintExtension](/docs/queries/mint.md) Information about inflation and
  provisions
- 🔗 [StakingExtension](/docs/queries/staking.md) All information about staking
  related stuff
- 🔗 [TxExtension](/docs/queries/tx.md) Information about transactions

🔗 [Back to clients overview](/docs/clients.md)