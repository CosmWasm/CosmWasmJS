# Auth queries

## Create a queryClient

```ts
  // Instantiate tmClient
  const tmClient = await Tendermint34Client.connect(rpcUrl);

  // Create client with authExtension
  const client = QueryClient.withExtensions(tmClient, setupAuthExtension);
```

## Available query methods

>**.tx.getTx**
>*Params: (txId: string)*

🔗 [Back to query overview](/docs/queries/overview.md)