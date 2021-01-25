<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
    <v-expansion-panel-content class="pa-2">
      <slot name="feature" class="d-flex flex-column justify-space-around align-center" />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class FeaturePanel extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop(String) title!: string;
  @Prop({ type: String, default: '' }) value!: string;
}
</script>

<!--<style lang="scss" scoped></style>-->
