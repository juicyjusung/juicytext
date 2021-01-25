<template>
  <feature-panel title="개행(엔터) 추가">
    <template slot="feature">
      <div class="d-flex flex-column">
        <div class="d-flex flex-row">
          <juicy-text-field
            v-model="input"
            label="추가할 엔터(개행)의 개수"
            type="number"
            hide-details
            @onEnter="addLineBreaksByNum"
          />
          <v-btn class="ml-4" @click="addLineBreaksByNum">실행</v-btn>
        </div>
        <juicy-switch v-model="checkOriginNL" label="기존 개행 삭제"></juicy-switch>
        <v-divider class="my-4" />
        <div class="d-flex flex-row justify-center align-center">
          <juicy-text-field v-model="input" hide-details />
          <v-radio-group v-model="beforeAfter" class="my-0 px-3" hide-details>
            <v-radio label="이전" value="이전"></v-radio>
            <v-radio label="이후" value="이후"></v-radio>
          </v-radio-group>
          <v-btn class="ml-1" @click="addLineBreaksByNum">실행</v-btn>
        </div>
      </div>
    </template>
  </feature-panel>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import TextMixin from '~/mixins/text-mixin';
import { textStore } from '~/utils/store-accessor';

@Component({
  components: {},
  mixins: [TextMixin],
})
export default class ConditionalNewLine extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop({ type: String, default: '' }) value!: string;

  input = '';
  checkOriginNL = false;
  beforeAfter = '이후';
  addLineBreaksByNum() {
    const charNumNewLineBreaks = [...Array(Number(this.input))].reduce(acc => (acc += '\n'), '');
    textStore.setOutputText(textStore.inputLineArr.join(charNumNewLineBreaks));
  }
}
</script>

<!--<style lang="scss" scoped></style>-->
