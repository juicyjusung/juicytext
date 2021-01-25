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
    full-width
    :prefix="prefix"
    :suffix="suffix"
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
  @Prop([Number, String]) value!: string | number;
  @Prop(String) placeholder!: string;
  @Prop(String) backgroundColor!: string;
  @Prop(String) label!: string;
  @Prop(String) hint!: string;
  @Prop(String) prefix!: string;
  @Prop(String) suffix!: string;
  @Prop(String) type!: string;
  @Prop(Array) rules!: any[];
  @Prop(Number) min!: number;
  @Prop(Boolean) disabled!: boolean;
  @Prop({ type: Boolean, default: true }) hideDetails!: boolean;

  @Emit('input') input(val: string) {
    return val;
  }

  @Emit('onEnter') onEnter() {}
}
</script>

<!--<style lang="scss" scoped></style>-->
