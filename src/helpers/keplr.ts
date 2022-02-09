/**
 * Helper functions for usage with keplr
 */

// Check if keplr is installed and supported
export function checkExtensionAndBrowser() : boolean {
    if (typeof window !== `undefined`) {
      if (
        window.getOfflineSigner &&
        window.keplr &&
        window.keplr.experimentalSuggestChain
      ) {
        return true;
      } else {
        console.error("Keplr extension not found", window);
      }
    } else {
      console.error("Window is undefined :|", window);
    }
    return false;
  };
  