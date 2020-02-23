<template>
    <div class="page-list page-screen">
        <v-container fluid>
            <v-row>
                <v-col cols="3"
                       col-md-3
                       v-for="(page,index) in pagesList"
                >
                    <v-card class="text-center pa-4" color="" >
                        <div class="text-right">
                            <v-btn small depressed fab @click="clonePage(page)">
                                <v-icon small>mdi-content-copy</v-icon>
                            </v-btn>
                            <v-btn  depressed fab   small class="ml-3" @click="deletePage(page,index)">
                                <v-icon small>mdi-delete-outline</v-icon>
                            </v-btn>
                        </div>
                        <div class="page-list-card">
                          <div>
                              <h3>{{page.title}}</h3>
<!--                              <p class="grey&#45;&#45;text">Last edited by <span class="black&#45;&#45;text">{{page.content.lastEdit}}</span></p>-->
                          </div>
                        </div>
                        <div>
                            <v-btn color="primary" @click="$router.push({path: '/page-form',query: {action: 'update',id: page.id}})" block>Manage</v-btn>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="3" col-md-3>
                    <v-card class="text-center pa-4 page-list-card-add" color="primary" dark @click="$router.push({path: '/page-form',query: {action: 'publish'}})">
                        <div class="page-list-card">
                            <v-icon class="mr-3" large>mdi-plus-box</v-icon>
                            <h3>
                                Add new Page
                            </h3>
                        </div>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import user from "../../utils/user";
    export default {
        name: "pagesList",
        data() {
            return {
                pagesList: []
            }
        },
        mounted() {
            this.getPages()
        },
        methods: {
            getPages () {
                this.$store.dispatch('setLoader', true)
                this.$http.get('pages')
                .then(response=>{
                    this.pagesList = response.data.data.pages
                    this.$store.dispatch('setLoader', false)
                })
                .catch(error=>{
                    this.$store.dispatch('setLoader', false)
                    if (error.response.status === 403 || error.response.status) {
                        user.logOut()
                    }
                })
            },
            clonePage (page) {
                this.$store.dispatch('setLoader', true)
                this.$http.post('pages',{
                    title: `${page.title} Copy`,
                    slug:  `${page.slug}-copy`,
                    content: page.content
                })
                .then(response=>{
                    this.$store.dispatch('setLoader', false)
                    this.pagesList.push(response.data.data)
                })
                .catch(error=>{
                    this.$store.dispatch('setLoader', false)
                    this.$store.dispatch('setLoader', false)
                    if (error.response.status === 403 || error.response.status) {
                        user.logOut()
                    }
                })
            },
            deletePage (page,index) {
                this.$store.dispatch('setLoader', true)
                this.$http.delete(`pages/${page.id}`)
                .then(response=>{
                    this.$store.dispatch('setLoader', false)
                    this.pagesList.splice(index,1)
                })
                .catch(error=>{
                    this.$store.dispatch('setLoader', false)
                    this.$store.dispatch('setLoader', false)
                    if (error.response.status === 403 || error.response.status) {
                        user.logOut()
                    }
                })
            }
        }
    }
</script>

<style scoped>
.page-list-card {
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.page-list-card-add {
    height: 100%;
    min-height: 0;
}
</style>