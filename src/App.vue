<template>
  <v-app dark>
    <component :is="layout">
      <transition :name="$store.state.style.routerAnimations" mode="out-in">
        <router-view/>
      </transition>
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

</style>
