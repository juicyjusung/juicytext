import { Action, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import { $axios } from '~/utils/axios';
import { DiffTextPacks, TextPack } from '~/entity/textpack';
import { removeEmptyLines } from '~/utils/text';

export const emptyLineRegex = /\S/;
export const isEmptyLine = (line: string) => !emptyLineRegex.test(line);

export interface ExecutionOptions {
  target: 'input' | 'output';
  mode: 'setText' | 'save' | 'diff';
  text?: string;
}

export interface SourceActionOptions {
  removeEmptyLines?: boolean;
  type?: 'array' | 'string';
}

@Module({
  namespaced: true,
  name: 'textModule',
  stateFactory: true,
})
export default class TextModule extends VuexModule {
  inputTp: TextPack = new TextPack();
  outputTp: TextPack = new TextPack();
  actionBuffer: TextPack[] = [];
  savedTextPacks: TextPack[] = [];
  diffPacks: DiffTextPacks = new DiffTextPacks({ left: new TextPack(), right: new TextPack() });
  continuousMode: boolean = false;

  @MutationAction({ mutate: ['inputTp'] })
  async initInput() {
    const inputTp = new TextPack();
    return {
      inputTp,
    };
  }

  @Mutation
  setInputTp(payload: TextPack) {
    this.inputTp = payload;
  }

  @Mutation
  setInputText(payload: string) {
    this.inputTp.text = payload;
  }

  @Mutation
  toggleContinuousMode() {
    this.continuousMode = !this.continuousMode;
  }

  @MutationAction({ mutate: ['outputTp'] })
  async initOutput() {
    const outputTp = new TextPack();
    return {
      outputTp,
    };
  }

  @Action({ rawError: true })
  getInputTextArr(options: { removeEmptyLines: boolean }): string[] {
    if (options && options.removeEmptyLines) {
      return this.inputTp.text.split('\n').filter(line => !isEmptyLine(line));
    } else {
      return this.inputTp.text.split('\n');
    }
  }

  @Action({ rawError: true })
  getSourceText(
    options: SourceActionOptions = { removeEmptyLines: false, type: 'string' }
  ): string[] | string {
    const textArr = options.removeEmptyLines
      ? removeEmptyLines(this.inputTp.text)
      : this.inputTp.text.split('\n');
    if (options.type === 'string') {
      return textArr.join('\n');
    } else {
      return textArr;
    }
  }

  @Mutation
  setOutputText(payload: string) {
    this.outputTp.text = payload;
  }

  @Action({ rawError: true })
  execute(result: string | string[]) {
    if (typeof result === 'string') {
      this.continuousMode ? this.setInputText(result) : this.setOutputText(result);
    } else {
      this.continuousMode
        ? this.setInputText(result.join('\n'))
        : this.setOutputText(result.join('\n'));
    }
  }

  /**
   * @description 아웃풋 -> 인풋
   * @returns {Promise<void>}
   */
  @Action({ rawError: true })
  async outputToInput() {
    this.setInputTp(this.outputTp);
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

  get isFirstState() {
    return !this.outputTp.text;
  }
}
