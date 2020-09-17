<template>
  <div>
    <header-tool-bar @toggleDrawer="drawer = !drawer"></header-tool-bar>
    <sidebar :drawer="drawer"/>
    <v-main>
      <slot />
    </v-main>
    <page-loader></page-loader>
    <snackbar-message></snackbar-message>
    <style-configuration></style-configuration>
  </div>
</template>

<script>
    import sidebar from '../components/layouts/sidebar'
    import headerToolBar from '../components/layouts/headerToolBar'
    import pageLoader from '../components/common/loader'
    import snackbarMessage from '../components/common/snackBar'
    import styleConfiguration from "../components/layouts/styleConfiguration";
    export default {
        name: "Default",
        components: {
          sidebar,
          headerToolBar,
          pageLoader,
          snackbarMessage,
          styleConfiguration
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
