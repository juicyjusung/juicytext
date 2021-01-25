import { Component, Vue } from 'nuxt-property-decorator';
import { textStore } from '~/store';

@Component({
  name: 'StoreMixin',
})
export default class StoreMixin extends Vue {
  get textStore() {
    return textStore;
  }
}
