<template>
  <v-navigation-drawer
    :value="drawer"
    :clipped="clipped"
    fixed
    app
    width="350"
    class="px-1"
    @input="toggleDrawer"
  >
    <div class="text-center d-flex pb-4 align-center justify-center">
      <v-btn class="flex" @click="all"> all </v-btn>
      <v-btn class="flex" @click="none"> none </v-btn>
    </div>
    <div class="hi">
      <v-expansion-panels v-model="activePanels" multiple>
        <v-expansion-panel v-for="(item, i) in menuCategories" :key="`ep-${i}`">
          <v-expansion-panel-header color="secondary">
            {{ item.label }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-0">
            <category-menu-linker :category="item.key" :search="item.search" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';
import { NavigationMenu } from '~/entity/common/layout';

@Component({
  components: {},
})
export default class LayoutMenus extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop({ type: Array, default: [] }) menus!: NavigationMenu[];
  @Prop({ type: Boolean, default: false }) clipped!: boolean;
  @Prop({ type: Boolean, default: false }) drawer!: boolean;

  activePanels: number[] = [];
  items = 5;

  menuCategories = [
    {
      key: 'favorite',
      label: '즐겨찾기',
      active: false,
      search: '',
    },
    {
      key: 'remove',
      label: '제거',
      active: false,
      search: '',
    },
    {
      key: 'add',
      label: '추가',
      active: false,
      search: '',
    },
    {
      key: 'convert',
      label: '변환',
      active: false,
      search: '',
    },
    {
      key: 'sort',
      label: '정렬',
      active: false,
      search: '',
    },
    {
      key: 'sort',
      label: '랜덤',
      active: false,
      search: '',
    },
  ];

  /*********************************************************************************
   * Store
   * ******************************************************************************/

  /*********************************************************************************
   * Emit
   * ******************************************************************************/
  @Emit('toggleDrawer') private toggleDrawer(drawer: boolean) {
    return drawer;
  }

  /*********************************************************************************
   * Life Cycles
   * ******************************************************************************/
  created() {
    this.setDefaultOpenedMenu();
    this.all();
  }
  /*********************************************************************************
   * Methods
   * ******************************************************************************/

  all() {
    this.activePanels = [...Array(this.items).keys()].map((k, i) => i);
  }

  none() {
    this.activePanels = [];
  }

  setDefaultOpenedMenu() {
    this.activePanels = this.menuCategories.reduce((acc, cur, i) => {
      if (cur.active) {
        acc.push(i);
      }
      return acc;
    }, [] as number[]);
  }
}
</script>

<style lang="scss">
.v-expansion-panel-content__wrap {
  padding: 0 !important;
}
</style>
