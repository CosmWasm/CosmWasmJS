/**
 * Setup helper functions
 *
 * These are multiple helper function to get quickly started.
 * There are currently 4 different functions to choose from:
 *  (a) Web / Keplr
 *  (b) Web / Ledger
 *  (c) Node / Local Mnemonic
 *  (d) Node / Ledger
 */
import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";

import { makeCosmoshubPath } from "../amino";
import { SigningCosmWasmClient } from "../cosmwasm-stargate";
import { LedgerSigner } from "../ledger-amino";
import { DirectSecp256k1HdWallet } from "../proto-signing";
import { GasPrice } from "../stargate";

/**
 * All setup functions are using the same config pattern
 */
interface Config {
  chainId: string;
  rpcEndpoint: string;
  gasPrice?: GasPrice;
  prefix?: string;
}

/**
 * (a) Web / Keplr
 * Prompts keplr and returns a signing client after the user
 * gave permissions.
 *
 * @param config
 * @returns SigningCosmWasmClient
 */
export async function setupWebKeplr(config: Config): Promise<SigningCosmWasmClient> {
  // check browser compatibility
  if (!window.keplr) {
    throw new Error("Keplr is not supported or installed on this browser!");
  }

  // try to enable keplr with given chainId
  await window.keplr.enable(config.chainId).catch(() => {
    throw new Error("Keplr can't connect to this chainId!");
  });

  const { prefix, gasPrice } = config;

  // Setup signer
  const offlineSigner = await window.getOfflineSignerAuto(config.chainId);

  // Init SigningCosmWasmClient client
  const signingClient = await SigningCosmWasmClient.connectWithSigner(config.rpcEndpoint, offlineSigner, {
    prefix,
    gasPrice,
  });

  return signingClient;
}

/**
 * (b) Web / Ledger
 * Returns a signing client after the user gave permissions.
 *
 * @param config
 * @returns SigningCosmWasmClient
 */
export async function setupWebLedger(config: Config): Promise<SigningCosmWasmClient> {
  const { prefix, gasPrice } = config;
  const interactiveTimeout = 120_000;

  // Prepare ledger
  const ledgerTransport = await TransportWebUSB.create(interactiveTimeout, interactiveTimeout);

  // Setup signer
  const offlineSigner = new LedgerSigner(ledgerTransport, {
    hdPaths: [makeCosmoshubPath(0)],
    prefix: prefix,
  });

  // Init SigningCosmWasmClient client
  const client = await SigningCosmWasmClient.connectWithSigner(config.rpcEndpoint, offlineSigner, {
    prefix,
    gasPrice,
  });

  return client;
}

/**
 * (c) Node / Local Mnemonic
 * Using a local mnemonic and returns a signing clien
 *
 * @param config
 * @param mnemonic
 * @returns SigningCosmWasmClient
 */
export async function setupNodeLocal(config: Config, mnemonic: string): Promise<SigningCosmWasmClient> {
  const { prefix, gasPrice } = config;

  // Setup signer
  const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix });

  // Init SigningCosmWasmClient client
  const client = await SigningCosmWasmClient.connectWithSigner(config.rpcEndpoint, offlineSigner, {
    prefix,
    gasPrice,
  });

  return client;
}

/**
 * (d) Node / Ledger
 * Returns a signing client after the user gave permissions.
 *
 * @param config
 * @returns SigningCosmWasmClient
 */
export async function setupNodeLedger(config: Config): Promise<SigningCosmWasmClient> {
  const { prefix, gasPrice } = config;
  const interactiveTimeout = 120_000;

  // Prepare ledger
  const ledgerTransport = await TransportNodeHid.create(interactiveTimeout, interactiveTimeout);

  // Setup signer
  const offlineSigner = new LedgerSigner(ledgerTransport, {
    hdPaths: [makeCosmoshubPath(0)],
    prefix: prefix,
  });

  const client = await SigningCosmWasmClient.connectWithSigner(config.rpcEndpoint, offlineSigner, {
    prefix: prefix,
    gasPrice: gasPrice,
  });

  return client;
}
