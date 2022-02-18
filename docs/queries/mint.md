# Mint queries

## Create a queryClient

```ts
  // Instantiate tmClient
  const tmClient = await Tendermint34Client.connect(rpcUrl);

  // Create client with mintExtension
  const client = QueryClient.withExtensions(tmClient, setupMintExtension);
```

## Available query methods

>**.mint.params**
>*Params: none*
>
>**.mint.inflation**
>*Params: none*
>
>**.mint.annualProvisions**
>*Params: none*

🔗 [Back to query overview](/docs/queries/overview.md)