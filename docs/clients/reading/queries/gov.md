---
title: Gov Queries
parent: Advanced Queries
grand_parent: Reading
nav_order: 4
---

# Gov queries

## Create a queryClient

```ts
// Instantiate tmClient
const tmClient = await Tendermint34Client.connect(rpcUrl);

// Create client with govExtension
const client = QueryClient.withExtensions(tmClient, setupGovExtension);
```

## Available query methods

| Method         | Description | Params                                                                                        |
| :------------- | :---------- | :-------------------------------------------------------------------------------------------- |
| .gov.proposals |             | _proposalStatus: ProposalStatus,depositor: string, voter: string, paginationKey?: Uint8Array_ |
| .gov.proposal  |             | _proposalId: GovProposalId_                                                                   |
| .gov.deposits  |             | _proposalId: GovProposalId, paginationKey?:Uint8Array_                                        |
| .gov.deposit   |             | _proposalId: GovProposalId, depositorAddress: string_                                         |
| .gov.tally     |             | _proposalId: GovProposalId_                                                                   |
| .gov.votes     |             | _proposalId: GovProposalId, paginationKey?: Uint8Array_                                       |
| .gov.vote      |             | _proposalId: GovProposalId, voterAddress: string_                                             |

🔗 [Back to query overview](index.md)
