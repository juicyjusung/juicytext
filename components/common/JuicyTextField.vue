<template>
  <v-text-field
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
    :min="min || '0'"
    :hide-details="hideDetails"
    @input="input"
    @keydown.enter="$emit('onEnter')"
  ></v-text-field>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'JuicyTextField',
  components: {},
})
export default class JuicyTextField extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop(String) value!: string;
  @Prop(String) placeholder!: string;
  @Prop(String) backgroundColor!: string;
  @Prop(String) label!: string;
  @Prop(String) hint!: string;
  @Prop(String) type!: string;
  @Prop(Array) rules!: any[];
  @Prop(Number) min!: number;
  @Prop(Boolean) disabled!: boolean;
  @Prop(Boolean) hideDetails!: boolean;

  @Emit('input') input(val: string) {
    return val;
  }

  @Emit('onEnter') onEnter() {}
}
</script>

<!--<style lang="scss" scoped></style>-->
