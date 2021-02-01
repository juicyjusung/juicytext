<template>
  <feature-panel title="라인 순서 거꾸로">
    <template slot="feature">
      <!-- Options -->
      <feature-panel-options>
        <feature-panel-row space-around>
          <juicy-switch v-model="removeEmptyLines" label="공백 라인 제거"></juicy-switch>
        </feature-panel-row>
      </feature-panel-options>
      <!-- Features -->
      <feature-panel-features>
        <feature-panel-row center>
          <v-btn class="ml-2" @click="reverseLines">라인순서 바꾸기</v-btn>
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

  async reverseLines() {
    const inputArr = await textStore.getInputTextArr({ removeEmptyLines: this.removeEmptyLines });

    textStore.execute(inputArr.reverse());
  }
}
</script>

<!--<style lang="scss" scoped></style>-->
