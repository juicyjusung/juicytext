<template>
  <div style="width: 100%" class="d-flex flex-row align-center my-1" :class="styleClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class FeaturePanelRow extends Vue {
  @Prop({ type: Boolean, default: false }) right!: boolean;
  @Prop({ type: Boolean, default: false }) left!: boolean;
  @Prop({ type: Boolean, default: false }) center!: boolean;
  @Prop({ type: Boolean, default: false }) spaceBetween!: boolean;
  @Prop({ type: Boolean, default: false }) spaceAround!: boolean;
  get styleClass() {
    let classString = '';
    if (this.right) classString += 'justify-end';
    if (this.left) classString += 'justify-start';
    if (this.center) classString += 'justify-center';
    if (this.spaceBetween) classString += 'justify-space-between';
    if (this.spaceAround) classString += 'justify-space-around';
    return classString;
  }
}
</script>

<!--<style lang="scss" scoped></style>-->
