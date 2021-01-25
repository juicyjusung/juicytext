<template>
  <v-switch
    :value="value"
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
    class="col-auto mt-0"
    @input="input"
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

  @Emit('input') input(val: string) {
    return val;
  }

  @Emit('onEnter') onEnter() {}
}
</script>

<!--<style lang="scss" scoped></style>-->
