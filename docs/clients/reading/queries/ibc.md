---
title: Ibc Queries
parent: Advanced Queries
grand_parent: Reading
nav_order: 5
---
# IBC queries

## Create a queryClient

```ts
  // Instantiate tmClient
  const tmClient = await Tendermint34Client.connect(rpcUrl);

  // Create client with authExtension
  const client = QueryClient.withExtensions(tmClient, setupAuthExtension);
```

## Available query methods

###Channel Queries
>**.ibc.channel.channel**
>*Params: (portId: string, channelId: string)*
>
>**.ibc.channel.channels**
>*Params: (paginationKey?: Uint8Array)*
>
>**.ibc.channel.allChannels**: 
>*Params: none*
>
>**.ibc.channel.connectionChannels**
>*Params: (connection: string, paginationKey?: Uint8Array)*
>
>**.ibc.channel.allConnectionChannels**
>*Params: (connection: string)*
>
>**.ibc.channel.clientState**
>*Params: (portId: string, channelId: string)*
>
>**.ibc.channel.consensusState**
>*Params: (portId: string,channelId: string,revisionNumber: number,revisionHeight: number)*
>
>**.ibc.channel.packetCommitment**
>*Params: (portId: string, channelId: string, sequence: Long)*
>
>**.ibc.channel.packetCommitments**
>*Params: ( portId: string,channelId: string,paginationKey?: Uint8Array)*
>
>**.ibc.channel.allPacketCommitments**
>*Params: ( portId: string, channelId: string)*
>
>**.ibc.channel.packetReceipt**
>*Params: ( portId: string, channelId: string, sequence: number)*
>
>**.ibc.channel.packetAcknowledgement**
>*Params: ( portId: string,channelId: string, sequence: number)*
>
>**.ibc.channel.packetAcknowledgements**
>*Params: ( portId: string,channelId: string,paginationKey?: Uint8Array)*
>
>**.ibc.channel.allPacketAcknowledgements**
>*Params: ( portId: string, channelId: string)*
>
>**.ibc.channel.unreceivedPackets**
>*Params: ( portId: string,channelId: string, packetCommitmentSequences:  number[])*
>
>**.ibc.channel.unreceivedAcks**
>*Params: ( portId: string,channelId: string,packetAckSequences:  number[])*
>
>**.ibc.channel.nextSequenceReceive**
>*Params: ( portId: string,channelId: string)*

### Client Queries
>**.ibc.client.state**
>*Params: (clientId: string)*
>
>**.ibc.client.states**
>*Params: (paginationKey?: Uint8Array)*
>
>**.ibc.client.allStates**
>*Params: none*
>
>**.ibc.client.consensusState**
>*Params: (clientId: string, height?: number)*
>
>**.ibc.client.consensusStates**
>*Params: (clientId: string,paginationKey?: Uint8Array)*
>
>**.ibc.client.allConsensusStates**
>*Params: (clientId: string)*
>
>**.ibc.client.params**
>*Params: ()*
>
>**.ibc.client.stateTm**
>*Params: (clientId: string)*
>
>**.ibc.client.statesTm**
>*Params: (paginationKey?: Uint8Array)*
>
>**.ibc.client.allStatesTm**
>*Params: ()*
>
>**.ibc.client.consensusStateTm**
>*Params: (clientId: string, height?: Height)*

### Connection Queries
>**.ibc.connection.connection**
>*Params: (connectionId: string)*
>
>**.ibc.connection.connections**
>*Params: (paginationKey?: Uint8Array)*
>
>**.ibc.connection.allConnections**
>*Params: none*
>
>**.ibc.connection.clientConnections**
>*Params: (clientId: string)*
>
>**.ibc.connection.clientState**
>*Params: (connectionId: string)*
>
>**.ibc.connection.consensusState**
>*Params: (connectionId: string,revisionNumber: number,revisionHeight: number)*

### Transfer Queries
>**.ibc.transfer.denomTrace** 
>*Params: (hash: string)*
>
>**.ibc.transfer.denomTraces** 
>*Params: (paginationKey?: Uint8Array)*
>
>**.ibc.transfer.allDenomTraces**
>*Params: none*
>
>**.ibc.transfer.params**
>*Params: none*

🔗 [Back to query overview](index.md)