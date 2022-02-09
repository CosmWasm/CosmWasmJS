/**
 * Helper functions for usage with keplr
 */

// Check if keplr is installed and supported
export const checkExtensionAndBrowser = () => {
    if (typeof window !== `undefined`) {
      if (
        window.getOfflineSigner &&
        window.keplr &&
        window.keplr.experimentalSuggestChain
      ) {
        return true;
      } else {
        console.log("Keplr extension not found", window);
      }
    } else {
      console.log("Window is undefined :|", window);
    }
    return false;
  };
  