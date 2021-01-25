<template>
  <v-expansion-panels v-model="activePanels" multiple accordion tile>
    {{ search }}
    <conditional-new-line />
  </v-expansion-panels>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class AddCategory extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop({ type: String, default: '' }) value!: string;
  @Prop({ type: String, default: '' }) search!: string;

  activePanels = [];
  /*********************************************************************************
   * Store
   * ******************************************************************************/
  // get email() {
  //   return this.$accessor.email;
  // }
  //
  // setEmail() {
  //   this.$accessor.setEmail('testEmail');
  // }
  //
  // setName() {
  //   this.$accessor.submodule.setName('juicyjusung');
  // }
  /*********************************************************************************
   * Emit
   * ******************************************************************************/
  /*********************************************************************************
   * Life Cycles
   * ******************************************************************************/
  /*********************************************************************************
   * Methods
   * ******************************************************************************/
}
</script>

<!--<style lang="scss" scoped></style>-->
