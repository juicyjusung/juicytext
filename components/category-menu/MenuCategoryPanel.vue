<template>
  <v-expansion-panels v-model="activePanels" multiple accordion tile>
    <component :is="item.component" v-for="(item, i) in features" :key="i"></component>
  </v-expansion-panels>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { MenuCategory, MenuFeature } from '~/entity/common/layout';

@Component({
  components: {},
  mixins: [],
})
export default class AddCategory extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop(Object) category!: MenuCategory;
  @Prop(Array) features!: MenuFeature[];

  components = [];
  activePanels: number[] = [];

  created() {
    this.setDefaultOpenedMenu();
  }

  setDefaultOpenedMenu() {
    this.activePanels = this.features.reduce((acc, cur, i) => {
      if (cur.active) {
        acc.push(i);
      }
      return acc;
    }, [] as number[]);
  }
}
</script>

<!--<style lang="scss" scoped></style>-->
