<template>
    <v-navigation-drawer
            app
            persistent
            v-model="drawerToggle"
            mobile-break-point="991"
            width="200"
            dark
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">

                </v-list-item-title>
                <v-list-item-subtitle>

                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>



        <v-list
                dense
                nav
        >
            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: {
          drawer: {
            type: Boolean,
            default: () => {
              return true
            }
          }
        },
        data () {
            return {
                items: [
                    { title: 'Pages', icon: 'mdi-file-document-box-multiple', link:'/' },
                    { title: 'Modules', icon: 'mdi-view-module', link:'/modules' },
                    { title: 'Styling', icon: 'mdi-brush', link:'/styling' },
                    { title: 'Search Engine', icon: 'mdi-card-search', link:'/seo' },
                    { title: 'Header', icon: 'mdi-page-layout-header', link:'/seo' },
                    { title: 'Footer', icon: 'mdi-page-layout-footer', link:'/seo' },
                    { title: 'Social', icon: 'mdi-twitter', link:'/seo' },
                    { title: 'Integration', icon: 'mdi-api', link:'/seo' },
                    { title: 'Users', icon: 'mdi-account', link:'/seo' },
                    { title: 'Settings', icon: 'mdi-wrench', link:'/settings' },
                ],
                drawerToggle: true,
                mini: true
            }
        },
      watch: {
          drawer() {
            this.drawerToggle = !this.drawerToggle
          }
      }
    }
</script>

<style lang="scss">
    .v-navigation-drawer--fixed {
        height: 94vh !important;
        top: 64px !important;
    }
</style>