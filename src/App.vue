<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script>
const default_layout = 'default'
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout+ '-layout'
    }
  }
}
</script>

<style>
  @import "styles/vuetify-reset.scss";
  @import "styles/inputs.scss";
  @import "styles/builder.scss";
  .v-content {
    padding-top: 70px !important;
  }
</style>
