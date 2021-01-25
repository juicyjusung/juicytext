<template>
  <h1>Scaffold</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Scaffold extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop({ type: String, default: '' }) value!: string;
}
</script>

<!--<style lang="scss" scoped></style>-->
