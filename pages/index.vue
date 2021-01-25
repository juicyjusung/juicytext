<template>
  <v-row align="center">
    <!--input-->
    <v-col :class="horizontalView ? 'col-12' : 'col-6'">
      <text-field
        :text-pack="textStore.inputTp"
        title="Input"
        style="height: 400px"
        class="flex-grow-0"
        @input="val => textStore.setInputText(val)"
      />
    </v-col>
    <v-col :class="horizontalView ? 'col-12' : 'col-6'">
      <text-field
        :text-pack="textStore.outputTp"
        class="flex-grow-0"
        title="Output"
        style="height: 400px"
        @input="val => textStore.setOutputText(val)"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import TextMixin from '~/mixins/text-mixin';

@Component({
  components: {},
  mixins: [TextMixin],
  async fetch() {
    // await todoStore.fetchTodos();
  },
  async asyncData() {},
})
export default class Home extends Vue {
  horizontalView = false;
}
</script>
