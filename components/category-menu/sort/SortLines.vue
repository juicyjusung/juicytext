<template>
  <feature-panel title="라인 정렬">
    <template slot="feature">
      <!-- Options -->
      <feature-panel-options>
        <feature-panel-row space-around>
          <juicy-switch v-model="removeEmptyLines" label="공백 라인 제거"></juicy-switch>
          <juicy-switch v-model="trim" label="시작/끝 공백 정리"></juicy-switch>
        </feature-panel-row>
      </feature-panel-options>
      <!-- Features -->
      <feature-panel-features>
        <feature-panel-row center>
          <v-btn class="ml-2" @click="ascSort">오름차순 정렬</v-btn>
          <v-btn class="ml-2" @click="descSort">내림차순 정렬</v-btn>
        </feature-panel-row>
        <feature-panel-row center>
          <v-btn class="ml-2" @click="ascSortNumber">숫자 오름차순 정렬</v-btn>
          <v-btn class="ml-2" @click="descSortNumber">숫자 내림차순 정렬</v-btn>
        </feature-panel-row>
      </feature-panel-features>
    </template>
  </feature-panel>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'nuxt-property-decorator';
import StoreMixin from '@/mixins/store-mixin';
import { isEmptyLine } from '~/store/textModule';
import { textStore } from '~/utils/store-accessor';

@Component({
  components: {},
  mixins: [StoreMixin],
})
export default class SortLines extends Vue {
  removeEmptyLines = true;
  trim = true;

  async ascSort() {
    const inputArr = await textStore.getInputTextArr({
      removeEmptyLines: this.removeEmptyLines,
      trim: this.trim,
    });

    const result = inputArr.sort();
    textStore.execute(result);
  }

  async descSort() {
    const inputArr = await textStore.getInputTextArr({
      removeEmptyLines: this.removeEmptyLines,
      trim: this.trim,
    });

    const result = inputArr.sort((a, z) => (a > z ? -1 : 1));
    textStore.execute(result);
  }

  async ascSortNumber() {
    const inputArr = await textStore.getInputTextArr({
      removeEmptyLines: this.removeEmptyLines,
      trim: this.trim,
    });

    const result = inputArr.sort((a, z) => this.getNumberByText(a) - this.getNumberByText(z));
    textStore.execute(result);
  }

  async descSortNumber() {
    const inputArr = await textStore.getInputTextArr({
      removeEmptyLines: this.removeEmptyLines,
      trim: this.trim,
    });

    const result = inputArr.sort((a, z) => this.getNumberByText(z) - this.getNumberByText(a));
    textStore.execute(result);
  }

  getNumberByText(text: string) {
    let result = '';
    for (const char of text) {
      if (isNaN(Number(char))) {
        break;
      }
      result += `${char}`;
    }
    return Number(result);
  }
}
</script>

<!--<style lang="scss" scoped></style>-->
