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

### Channel Queries

| Method                                 | Description | Params                                                                           |
| :------------------------------------- | :---------- | :------------------------------------------------------------------------------- |
| .ibc.channel.channel                   |             | _portId: string, channelId: string_                                              |
| .ibc.channel.channels                  |             | _paginationKey?: Uint8Array_                                                     |
| .ibc.channel.allChannels               |             | _none_                                                                           |
| .ibc.channel.connectionChannels        |             | _connection: string, paginationKey?: Uint8Array_                                 |
| .ibc.channel.allConnectionChannels     |             | _connection: string_                                                             |
| .ibc.channel.clientState               |             | _portId: string, channelId: string_                                              |
| .ibc.channel.consensusState            |             | _portId: string,channelId: string,revisionNumber: number,revisionHeight: number_ |
| .ibc.channel.packetCommitment          |             | _portId: string, channelId: string, sequence: Long_                              |
| .ibc.channel.packetCommitments         |             | _portId: string,channelId: string,paginationKey?: Uint8Array_                    |
| .ibc.channel.allPacketCommitments      |             | _portId: string, channelId: string_                                              |
| .ibc.channel.packetReceipt             |             | _portId: string, channelId: string, sequence: number_                            |
| .ibc.channel.packetAcknowledgement     |             | _portId: string,channelId: string, sequence: number_                             |
| .ibc.channel.packetAcknowledgements    |             | _portId: string,channelId: string,paginationKey?: Uint8Array_                    |
| .ibc.channel.allPacketAcknowledgements |             | _portId: string, channelId: string_                                              |
| .ibc.channel.unreceivedPackets         |             | _portId: string,channelId: string, packetCommitmentSequences: number[]_          |
| .ibc.channel.unreceivedAcks            |             | _portId: string,channelId: string,packetAckSequences: number[]_                  |
| .ibc.channel.nextSequenceReceive       |             | _portId: string,channelId: string_                                               |

### Client Queries

| Method                         | Description | Params                                        |
| :----------------------------- | :---------- | :-------------------------------------------- |
| .ibc.client.state              |             | _clientId: string_                            |
| .ibc.client.states             |             | _paginationKey?: Uint8Array_                  |
| .ibc.client.allStates          |             | _none_                                        |
| .ibc.client.consensusState     |             | _clientId: string, height?: number_           |
| .ibc.client.consensusStates    |             | _clientId: string,paginationKey?: Uint8Array_ |
| .ibc.client.allConsensusStates |             | _clientId: string_                            |
| .ibc.client.params             |             | _none_                                        |
| .ibc.client.stateTm            |             | _clientId: string_                            |
| .ibc.client.statesTm           |             | _paginationKey?: Uint8Array_                  |
| .ibc.client.allStatesTm        |             | _none_                                        |
| .ibc.client.consensusStateTm   |             | _clientId: string, height?: Height_           |

### Connection Queries

| Method                            | Description | Params                                                               |
| :-------------------------------- | :---------- | :------------------------------------------------------------------- |
| .ibc.connection.connection        |             | _connectionId: string_                                               |
| .ibc.connection.connections       |             | _paginationKey?: Uint8Array_                                         |
| .ibc.connection.allConnections    |             | _none_                                                               |
| .ibc.connection.clientConnections |             | _clientId: string_                                                   |
| .ibc.connection.clientState       |             | _connectionId: string_                                               |
| .ibc.connection.consensusState    |             | _connectionId: string,revisionNumber: number,revisionHeight: number_ |

### Transfer Queries

| Method                       | Description | Params                       |
| :--------------------------- | :---------- | :--------------------------- |
| .ibc.transfer.denomTrace     |             | _hash: string_               |
| .ibc.transfer.denomTraces    |             | _paginationKey?: Uint8Array_ |
| .ibc.transfer.allDenomTraces |             | _none_                       |
| .ibc.transfer.params         |             | _none_                       |

🔗 [Back to query overview](index.md)
