<template>
  <v-expansion-panels
    :value="activePanels"
    multiple
    accordion
    focusable
    @change="updateActivePanels"
  >
    <v-expansion-panel v-for="(item, i) in menus" :key="`ep-${i}`">
      <v-expansion-panel-header color="secondary">
        {{ item.label }}
      </v-expansion-panel-header>
      <v-expansion-panel-content class="pa-0">
        <component :is="item.component" :features="item.children" />
        <!--          <category-menu-linker :category="item" />-->
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';
import { MenuCategory } from '~/entity/common/layout';

@Component({
  components: {},
})
export default class Menus extends Vue {
  @Prop(Array) menus!: MenuCategory[];

  component: any = null;

  get activePanels() {
    return this.menus.reduce((acc, cur, i) => {
      if (cur.active) {
        acc.push(i);
      }
      return acc;
    }, [] as number[]);
  }

  @Emit('update')
  updateActivePanels(activePanels: number[]) {
    return activePanels;
  }
}
</script>

<style lang="scss">
.v-expansion-panel-header {
  min-height: 30px;
  padding: 12px 24px;
}
.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 50px;
}

.v-expansion-panel-content__wrap {
  padding: 0 !important;
}
</style>
