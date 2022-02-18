## Clients

You don't need to do any configuration to get started. It is only important to understand when you need to import which symbols from the package.

Basically there are 2 different clients:
- **CosmWasmClient**
This client can only read. You do not need to have a wallet to instantiate this one. Only an rpcUrl is needed. For a more detailed description please refer to the 🔗 [query documentation](/docs/queries/overview.md).

- **CosmWasmSigningClient**
This client can also write. In order to instantiate it, a wallet must be specified in addition to the rpcUrl. To facilitate the instantiation, CosmWasmJS already comes with some setup functions.
