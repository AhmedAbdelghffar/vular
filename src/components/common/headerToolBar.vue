<template>
    <v-app-bar fixed id="main-header" color="primary" dark>
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
                        <img
                                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                alt="Avatar"
                        >
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

        <v-btn icon>
            <v-icon>apps</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>refresh</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
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
    #main-header {
        z-index: 100;
    }
</style>
