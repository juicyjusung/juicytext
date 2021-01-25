<template>
  <v-app dark>
    <client-only>
      <notifications position="bottom center" />
    </client-only>

    <layout-left-drawer :clipped="clipped" :drawer="drawer" @toggleDrawer="val => (drawer = val)" />
    <layout-header
      :clipped="clipped"
      :drawer="drawer"
      title="juicytext"
      @toggleDrawer="val => (drawer = val)"
    />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <layout-footer :absolute="!fixed" />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
  transition: {
    name: 'page',
    mode: 'out-in',
  },
})
export default class DefaultLayout extends Vue {
  clipped = false;
  drawer = true;
  fixed = false;
  miniVariant = false;
  title = 'juicy template';
}
</script>

<style lang="scss">
.notification-title {
  font-size: 16px;
}
</style>
