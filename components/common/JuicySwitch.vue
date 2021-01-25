<template>
  <v-switch
    :input-value="value"
    dense
    color="primary"
    outlined
    :rules="rules"
    :placeholder="placeholder"
    :background-color="backgroundColor"
    :label="label"
    :disabled="disabled"
    :hint="hint"
    :type="type"
    hide-details
    class="mt-0"
    @change="change"
  ></v-switch>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'JuicySwitch',
  components: {},
})
export default class JuicySwitch extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop(Boolean) value!: boolean;
  @Prop(String) placeholder!: string;
  @Prop(String) backgroundColor!: string;
  @Prop(String) label!: string;
  @Prop(String) hint!: string;
  @Prop(String) type!: string;
  @Prop(Array) rules!: any[];
  @Prop(Boolean) disabled!: boolean;
  @Prop(Boolean) dense!: boolean;

  @Emit('input') change(val: boolean) {
    return val;
  }

  @Emit('onEnter') onEnter() {}
}
</script>

<!--<style lang="scss" scoped></style>-->
