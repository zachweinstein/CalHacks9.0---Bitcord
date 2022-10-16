import {makeObservable, flow, configure, observable} from "mobx";
import {ElvClient} from "@eluvio/elv-client-js";
import {ElvWalletClient} from "@eluvio/elv-client-js";

// Force strict mode so mutations are only allowed within actions.
configure({
  enforceActions: "always"
});

class RootStore {
  client;
  walletClient;
  loggedIn = false;
  userProfile;
  loaded = false;

  constructor() {
    makeObservable(this, {
      client: observable,
      loggedIn: observable,
      userProfile: observable,
      walletClient: observable,
      loaded: observable
    });

    this.Initialize();
  }

  Initialize = flow(function * () {
    try {
      this.client = yield ElvClient.FromConfigurationUrl({
        configUrl: EluvioConfiguration["config-url"]
      });

      this.walletClient = yield ElvWalletClient.Initialize({
        network: EluvioConfiguration.network,
        mode: EluvioConfiguration.mode
      });
    } catch(error) {
      console.error("Failed to initialize application");
      console.error(error);
    } finally {
      this.loaded = true;
    }
  });

  Authenticate = flow(function * () {
    try {
      yield this.walletClient.LogIn({
        method: "popup"
      });

      this.loggedIn = true;
    } catch(error) {
      console.error(error);
    }
  });

  Logout = flow(function * () {
    yield this.walletClient.LogOut();
    this.loggedIn = false;
    this.userProfile = {};
  });
}

export const rootStore = new RootStore();

window.rootStore = rootStore;
