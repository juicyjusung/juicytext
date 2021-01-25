import { Action, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import { $axios } from '~/utils/axios';
import { DiffTextPacks, TextPack } from '~/entity/textpack';

@Module({
  namespaced: true,
  name: 'textModule',
  stateFactory: true,
})
export default class TextModule extends VuexModule {
  inputTp: TextPack = new TextPack();
  outputTp: TextPack = new TextPack();
  savedTextPacks: TextPack[] = [];
  diffPacks: DiffTextPacks = new DiffTextPacks({ left: new TextPack(), right: new TextPack() });

  @MutationAction({ mutate: ['inputTp'] })
  async initInput() {
    const inputTp = new TextPack();
    return {
      inputTp,
    };
  }

  @Mutation
  setInputText(payload: string) {
    this.inputTp.text = payload;
  }

  @MutationAction({ mutate: ['outputTp'] })
  async initOutput() {
    const outputTp = new TextPack();
    return {
      outputTp,
    };
  }

  get inputLineArr() {
    return this.inputTp.text.split('\n');
  }

  @Mutation
  setOutputText(payload: string) {
    this.outputTp.text = payload;
  }

  @Action
  async outputToInput() {
    this.inputTp = this.outputTp;
    await this.initOutput();
  }

  @MutationAction({ mutate: ['savedTextPacks'] })
  async fetchSavedTextPacks() {
    // api savedPacks 가져오기
    const res = await $axios.get('/user/{userId}/textpacks');
    const savedTextPacks: TextPack[] = res.data;
    return {
      savedTextPacks,
    };
  }

  @MutationAction({ mutate: ['savedTextPacks'] })
  async clearSavedTextPacks() {
    return {
      savedTextPacks: [],
    };
  }
}
