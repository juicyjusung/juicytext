<template>
  <v-hover v-slot="{ hover }">
    <v-card :elevation="hover ? 8 : 2">
      <v-card-title class="">
        <slot name="header"></slot>
      </v-card-title>
      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class FeatureCard extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop(String) title!: string;
}
</script>

<!--<style lang="scss" scoped></style>-->
