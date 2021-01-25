import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import TextModule from '~/store/textModule';

/* eslint-disable */
let textStore: TextModule;

function initialiseStores(store: Store<any>): void {
  textStore = getModule(TextModule, store);
}

export { initialiseStores, textStore };
