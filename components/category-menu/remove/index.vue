<template>
  <menu-category-panel :category="category" :features="features"></menu-category-panel>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { MenuCategory, MenuFeature } from '~/entity/common/layout';

@Component({
  components: {},
  mixins: [],
})
export default class RemoveCategory extends Vue {
  @Prop(Object) category!: MenuCategory;
  @Prop(Array) features!: MenuFeature[];
}
</script>
