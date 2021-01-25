import { Component, Vue } from 'nuxt-property-decorator';
import { textStore } from '~/store';

@Component({
  name: 'TextMixin',
})
export default class TextMixin extends Vue {
  get textStore() {
    return textStore;
  }

  hello() {}
}
