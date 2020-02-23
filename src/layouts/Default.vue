<template>
  <div>
    <header-tool-bar @toggleDrawer="drawer = !drawer"></header-tool-bar>
    <sidebar :drawer="drawer"/>
    <v-content>
      <slot />
    </v-content>
    <page-loader></page-loader>
    <snackbar-message></snackbar-message>
  </div>
</template>

<script>
    import sidebar from '../components/common/sidebar'
    import headerToolBar from '../components/common/headerToolBar'
    import pageLoader from '../components/common/loader'
    import snackbarMessage from '../components/common/snackBar'
    export default {
        name: "Default",
        components: {
          sidebar,
          headerToolBar,
          pageLoader,
          snackbarMessage
        },
        data () {
          return {
            drawer: true
          }
        }
    }
</script>

<style scoped>

</style>