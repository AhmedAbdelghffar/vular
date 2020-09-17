<template>
    <v-app-bar fixed id="main-header" color="primary" dark elevation="1">
        <v-icon @click="toggleDrawer">menu</v-icon>

        <v-toolbar-title class="">BLUE CMS</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y class="user-avatar">
            <template v-slot:activator="{ on }">
                <v-btn

                        large
                        text
                        v-on="on"
                        class="pa-1"
                >
                    <v-avatar
                            size="36px"
                    >
                        <v-icon>mdi-account</v-icon>
                    </v-avatar>
                    {{ $store.state.user.userName}}
                </v-btn>
            </template>
            <v-list>
                <v-list-item-title
                        @click="user.logOut()"
                >
                    <v-btn>
                        <v-icon>logout</v-icon>
                        Logout
                    </v-btn>


                </v-list-item-title>
            </v-list>
        </v-menu>


    </v-app-bar>
</template>

<script>
    import user from "../../utils/user";
  export default {
      data() {
          return {
              user
          }
      },
    methods: {
      toggleDrawer () {
        this.$emit('toggleDrawer')
      }
    }
  }
</script>

<style scoped>

</style>
