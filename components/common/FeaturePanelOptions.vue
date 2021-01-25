<template>
  <div style="width: 100%" class="d-flex flex-column justify-space-between align-center my-2">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'FeaturePanelOptions',
  components: {},
})
export default class FeaturePanelOptions extends Vue {}
</script>

<!--<style lang="scss" scoped></style>-->
