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
import { GasPrice, SigningCosmWasmClient } from "..";
import { checkExtensionAndBrowser } from "./keplr";

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
 * @param chainId
 * @param rpcEndpoint
 * @returns
 */
export async function setupKeplrWeb(config: Config): Promise<SigningCosmWasmClient> {
  // check browser compatibility
  if (!checkExtensionAndBrowser()) {
    throw new Error("Keplr is not supported or installed on this browser!");
  }

  // try to enable keplr with given chainId
  await window.keplr.enable(config.chainId).catch(() => {
    throw new Error("Keplr can't connect to this chainId!");
  });

  // Setup signer
  const offlineSigner = await window.getOfflineSignerAuto(config.chainId);

  // Get Accounts
  const [firstAccount] = await offlineSigner.getAccounts().catch(() => {
    throw new Error("Can't get an account!");
  });

  // Init SigningCosmWasmClient client
  const signingClient = await SigningCosmWasmClient.connectWithSigner(
    config.rpcEndpoint,
    offlineSigner,
    firstAccount,
  );

  return signingClient;
}
