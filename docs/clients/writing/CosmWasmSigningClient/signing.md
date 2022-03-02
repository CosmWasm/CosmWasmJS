---
title: Signing
nav_order: 2
parent: CosmWasmSigningClient
grand_parent: Writing
---

# Signing

In general, there are two different methods that can be used to sign transactions:

| Method              | Description                                                  | Params                                                                                                                 |
| :------------------ | :----------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| .signAndBroadcast() | Signs the given message and broadcasts it to the blockchain. | _signerAddress: string, messages: readonly EncodeObject[], fee: StdFee / "auto" / number, memo = ""_                   |
| .sign()             | Signs the given message without broadcasting it.             | _signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, explicitSignerData?: SignerData_ |
