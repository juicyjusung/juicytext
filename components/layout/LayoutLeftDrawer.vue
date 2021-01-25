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
      <v-btn class="flex-fill" @click="all"> all </v-btn>
      <v-btn class="flex-fill" @click="none"> none </v-btn>
    </div>
    <menus :menus="menus" @update="updateActivePanels" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';
import { MenuCategory } from '@/entity/common/layout';

@Component({
  components: {},
})
export default class LayoutLeftDrawer extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop({ type: Boolean, default: false }) clipped!: boolean;
  @Prop({ type: Boolean, default: false }) drawer!: boolean;

  menus: MenuCategory[] = [
    {
      category: 'favorite',
      component: () => import('~/components/category-menu/favorite/index.vue'),
      label: '즐겨찾기',
      active: false,
      search: '',
      children: [],
    },
    {
      category: 'remove',
      component: () => import('~/components/category-menu/remove/index.vue'),
      label: '제거',
      active: false,
      search: '',
      children: [],
    },
    {
      category: 'add',
      component: () => import('~/components/category-menu/add/index.vue'),
      label: '추가',
      active: false,
      search: '',
      children: [
        {
          component: () => import('~/components/category-menu/add/AddNewLine.vue'),
          label: '',
          active: false,
        },
        {
          component: () => import('~/components/category-menu/add/AddPrefixSuffix.vue'),
          label: '',
          active: false,
        },
      ],
    },
    {
      category: 'convert',
      component: () => import('~/components/category-menu/convert/index.vue'),
      label: '변환',
      active: false,
      search: '',
      children: [],
    },
    {
      category: 'sort',
      component: () => import('~/components/category-menu/sort/index.vue'),
      label: '정렬',
      active: false,
      search: '',
      children: [],
    },
    {
      component: () => import('~/components/category-menu/random/index.vue'),
      label: '랜덤',
      active: false,
      search: '',
      children: [],
      category: 'random',
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
    // this.setDefaultOpenedMenu();
    // this.all();
  }

  /*********************************************************************************
   * Methods
   * ******************************************************************************/

  updateActivePanels(activePanels: number[]) {
    this.menus.forEach((menu, i) => {
      menu.active = activePanels.includes(i);
    });
  }

  all() {
    this.menus.forEach(menu => (menu.active = true));
  }

  none() {
    this.menus.forEach(menu => (menu.active = false));
  }
}
</script>
