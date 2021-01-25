<template>
  <component :is="component" :search="search" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class CategoryMenuLinker extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop({ type: String, default: '' }) category!: string;
  @Prop({ type: String, default: '' }) search!: string;
  component: any = null;

  loader() {
    if (!this.category) {
      return null;
    }
    return () => import(`./${this.category}`);
  }

  mounted() {
    try {
      this.component = this.loader();
    } catch (e) {
      this.component = null;
    }
  }
}
</script>

<!--<style lang="scss" scoped></style>-->
