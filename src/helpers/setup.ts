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
import { checkExtensionAndBrowser } from "./keplr";
import { SigningCosmWasmClient } from "../cosmwasm-stargate";

export async function setupKeplrWeb(
  chainId: string,
  rpcEndpoint: string
): Promise<SigningCosmWasmClient> {
  // check browser compatibility
  if (!checkExtensionAndBrowser()) {
    throw new Error("Keplr is not supported or installed on this browser!");
  }

  // try to enable keplr with given chainId
  await window.keplr.enable(chainId).catch((e) => {
    throw new Error("Keplr can't connect to this chainId!");
  });

  // Setup signer
  const offlineSigner = await window.getOfflineSignerAuto(chainId);

  // Get Accounts
  const [firstAccount] = await offlineSigner.getAccounts().catch((e) => {
    throw new Error("Can't get an account!");
  });

  // Init SigningCosmWasmClient client
  const signingClient = await SigningCosmWasmClient.connectWithSigner(
    rpcEndpoint,
    offlineSigner,
    firstAccount
  );

  return signingClient;
}
