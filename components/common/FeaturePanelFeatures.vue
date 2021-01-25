<template>
  <div style="width: 100%" class="d-flex flex-column justify-space-between align-center">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'FeaturePanelFeatures',
  components: {},
})
export default class FeaturePanelFeatures extends Vue {}
</script>

<!--<style lang="scss" scoped></style>-->
