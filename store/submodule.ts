import { Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import { OptionalPick, ResponseType, Todo } from '~/types';
import { $axios } from '~/utils/axios';

export const state = (): { todos: Todo[] } => ({
  todos: [],
});

@Module({
  namespaced: true,
  name: 'storename',
  stateFactory: true,
})
export default class ModuleName extends VuexModule {
  data: string[] = [];

  @MutationAction({ mutate: ['data'] })
  async fetchData() {
    const res = await $axios.get('/todo');
    const data = res.data as string[];
    return {
      data,
    };
  }
}
