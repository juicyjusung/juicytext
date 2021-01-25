<template>
  <feature-panel title="라인 맨앞/맨뒤 텍스트 추가">
    <template slot="feature">
      <!-- Options -->
      <feature-panel-options>
        <feature-panel-row space-around>
          <juicy-switch v-model="removeEmptyLines" label="공백 라인 제거"></juicy-switch>
          <juicy-switch
            v-model="ignoreEmptyLines"
            label="공백 라인 무시"
            :disabled="removeEmptyLines"
          ></juicy-switch>
        </feature-panel-row>
      </feature-panel-options>
      <!-- Features -->
      <feature-panel-features>
        <feature-panel-row space-between>
          <juicy-text-field v-model="prefix" label="라인 맨앞에 추가할 텍스트"></juicy-text-field>
          <v-btn class="ml-2" @click="addPrefix">앞에 추가</v-btn>
        </feature-panel-row>
        <feature-panel-row space-between>
          <juicy-text-field v-model="suffix" label="라인 맨뒤에 추가할 텍스트"></juicy-text-field>
          <v-btn class="ml-2" @click="addSuffix">뒤에 추가</v-btn>
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
export default class AddPrefixSuffix extends Vue {
  removeEmptyLines = true;
  ignoreEmptyLines = true;
  prefix = '';
  suffix = '';

  @Watch('removeEmptyLines', { immediate: true })
  removeEmptyLinesWatcher(val: boolean) {
    if (val) {
      this.ignoreEmptyLines = false;
    } else {
      this.ignoreEmptyLines = true;
    }
  }

  async addPrefix() {
    let inputArr = await textStore.getInputTextArr({ removeEmptyLines: this.removeEmptyLines });
    inputArr = inputArr.map(line => {
      return isEmptyLine(line) && this.ignoreEmptyLines ? '' : `${this.prefix}${line}`;
    });
    textStore.execute(inputArr);
  }

  async addSuffix() {
    let inputArr = await textStore.getInputTextArr({ removeEmptyLines: this.removeEmptyLines });
    inputArr = inputArr.map(line => {
      return isEmptyLine(line) && this.ignoreEmptyLines ? '' : `${line}${this.suffix}`;
    });
    textStore.execute(inputArr);
  }
}
</script>

<!--<style lang="scss" scoped></style>-->
