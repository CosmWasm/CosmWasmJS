---
title: Gov Queries
parent: Queries
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

>**.gov.proposals**
>*Params: (proposalStatus: ProposalStatus,depositor: string, voter: string, paginationKey?: Uint8Array)*
>
>**.gov.proposal**
>*Params: (proposalId: GovProposalId)*
>
>**.gov.deposits**
>*Params: (proposalId: GovProposalId, paginationKey?:Uint8Array)*
>
>**.gov.deposit**
>*Params: (proposalId: GovProposalId, depositorAddress: string)*
>
>**.gov.tally**
>*Params: (proposalId: GovProposalId)*
>
>**.gov.votes**
>*Params: (proposalId: GovProposalId, paginationKey?: Uint8Array)*
>
>**.gov.vote**
>*Params: (proposalId: GovProposalId, voterAddress: string)*

🔗 [Back to query overview](index.md)