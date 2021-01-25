<template>
  <v-container fluid>
    <div class="d-flex"></div>

    <v-row class="d-flex" :class="horizontalView ? 'flex-row' : 'flex-column'">
      <!--input-->
      <v-col style="transition: all 0.3s ease-out; flex: 1">
        <text-field
          :text-pack="textStore.inputTp"
          style="height: 600px"
          class="flex-grow-0"
          @input="val => textStore.setInputText(val)"
        >
          <template slot="header">
            {{ textStore.continuousMode ? 'INPUT/OUTPUT' : 'INPUT' }}
            <v-spacer />
            <juicy-switch
              :value="textStore.continuousMode"
              label="연속 편집 모드"
              :dense="false"
              hint="hi"
              @input="toggleContinuousMode"
            />
            <div class="d-flex mx-2">
              <v-btn
                icon
                :disabled="textStore.continuousMode"
                @click="() => (horizontalView = !horizontalView)"
              >
                <v-icon>{{
                  horizontalView ? 'mdi-phone-rotate-landscape' : 'mdi-phone-rotate-portrait'
                }}</v-icon>
              </v-btn>
            </div>
            <v-btn depressed color="primary" class="mx-2" @click="clear">clear</v-btn>
          </template>
        </text-field>
      </v-col>

      <v-col
        style="transition: all 0.3s ease-out"
        :style="textStore.continuousMode ? 'flex: 0' : 'flex: 1'"
        :class="textStore.continuousMode ? 'mx-0 px-0' : ''"
      >
        <text-field
          v-if="!textStore.continuousMode"
          :text-pack="textStore.outputTp"
          style="height: 600px"
          @input="val => textStore.setOutputText(val)"
        >
          <template slot="header"> OUTPUT </template>
        </text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import StoreMixin from '~/mixins/store-mixin';
import { textStore } from '~/utils/store-accessor';

@Component({
  components: {},
  mixins: [StoreMixin],
  async fetch() {
    // await todoStore.fetchTodos();
  },
  async asyncData() {},
})
export default class Home extends Vue {
  horizontalView = true;
  continuousMode = true;
  clear() {
    textStore.setInputText('');
  }

  toggleContinuousMode() {
    textStore.toggleContinuousMode();
  }
}
</script>
