<template>
  <feature-panel title="개행(엔터) 추가">
    <template slot="feature">
      <!-- Options -->
      <feature-panel-options>
        <feature-panel-row space-between>
          <span>추가할 엔터(개행)의 개수</span>
          <juicy-text-field
            v-model="input"
            class="ml-2"
            style="flex: 1; max-width: 80px"
            label="개수"
            suffix="개"
            type="number"
            hide-details
            @onEnter="addLineBreaksByNum"
          />
        </feature-panel-row>
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
        <feature-panel-row right>
          <v-btn @click="addLineBreaksByNum">모든 라인에 추가</v-btn>
        </feature-panel-row>
        <feature-panel-row space-between class="mt-4">
          <v-combobox
            v-model="keywords"
            small-chips
            clearable
            hide-selected
            outlined
            deletable-chips
            persistent-hint
            multiple
            append-icon=""
            label="키워드를 입력해주세요"
            hint="엔터로 구분합니다."
          >
            <template #selection="{ attrs, item, select, selected }">
              <v-chip
                small
                v-bind="attrs"
                :input-value="selected"
                close
                @click="select"
                @click:close="removeKeyword(item)"
              >
                <strong>{{ item }}</strong>
              </v-chip>
            </template>
          </v-combobox>
        </feature-panel-row>
        <feature-panel-row right>
          <v-radio-group v-model="beforeAfter" class="my-0 px-3" hide-details>
            <v-radio label="이전" value="before"></v-radio>
            <v-radio label="이후" value="after"></v-radio>
          </v-radio-group>
          <v-btn class="ml-1" @click="addLineBreaksByKeyword">추가</v-btn>
        </feature-panel-row>
      </feature-panel-features>
    </template>
  </feature-panel>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import StoreMixin from '@/mixins/store-mixin';
import FeaturePanelOptions from '~/components/common/FeaturePanelOptions.vue';
import { isEmptyLine } from '~/store/textModule';
import { textStore } from '~/utils/store-accessor';
import { keywordsRegexArr, regexArrReplacer } from '~/utils/text';

@Component({
  components: { FeaturePanelOptions },
  mixins: [StoreMixin],
})
export default class ConditionalNewLine extends Vue {
  input = 1;
  removeEmptyLines = true;
  ignoreEmptyLines = true;
  keywords: string[] = [];

  removeKeyword(item: string) {
    this.keywords.splice(this.keywords.indexOf(item), 1);
    this.keywords = [...this.keywords];
  }

  @Watch('removeEmptyLines', { immediate: true })
  removeEmptyLinesWatcher(val: boolean) {
    this.ignoreEmptyLines = !val;
  }

  keyword = '';
  beforeAfter: 'before' | 'after' = 'after';

  get nCharLineBreaks() {
    return [...Array(Number(this.input))].reduce(acc => (acc += '\n'), '');
  }

  async addLineBreaksByNum() {
    let inputArr = (await textStore.getSourceText({
      type: 'array',
      removeEmptyLines: this.removeEmptyLines,
    })) as string[];

    inputArr = inputArr.map((line, index) => {
      if (index === inputArr.length - 1) {
        return line;
      }
      return isEmptyLine(line) && this.ignoreEmptyLines ? '' : `${line}${this.nCharLineBreaks}`;
    });
    textStore.execute(inputArr);
  }

  async addLineBreaksByKeyword() {
    const regexArr = keywordsRegexArr(this.keywords);
    const inputText = (await textStore.getSourceText({
      type: 'string',
      removeEmptyLines: this.removeEmptyLines,
    })) as string;

    const result = regexArrReplacer(regexArr, inputText, matched =>
      this.beforeAfter === 'before'
        ? `${this.nCharLineBreaks}${matched}`
        : `${matched}${this.nCharLineBreaks}`
    );

    textStore.execute(result);
  }
}
</script>

<!--<style lang="scss" scoped></style>-->
