# Bank queries

## Create a queryClient

```ts
  // Instantiate tmClient
  const tmClient = await Tendermint34Client.connect(rpcUrl);

  // Create client with bankExtension
  const client = QueryClient.withExtensions(tmClient, setupBankExtension);
```

## Available query methods

>**.bank.balance**
>*Params: (address: string, denom: string)*
>
>**.bank.allBalances**
>*Params:  (address: string)*
>
>**.bank.totalSupply**
>*Params: none* 
>
>**.bank.supplyOf**
>*Params:  (denom: string)*
>
>**.bank.denomMetadata**
>*Params:  (denom: string)*
>
>**.bank.denomsMetadata**
>*Params:  none*

🔗 [Back to query overview](/docs/queries/overview.md)