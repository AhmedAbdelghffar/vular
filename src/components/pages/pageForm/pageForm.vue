<template>
    <div class="page-list page-screen">
        <v-container fluid>
            <v-row>
                <v-col cols="9">
                    <v-row>
                        <v-col cols="5" class="pt-0">
                            <v-text-field
                              v-model="pageData.title"
                              placeholder="Page Title"
                              solo
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="5" class="pt-0">
                            <v-text-field
                              v-model="pageData.slug"
                              placeholder="Page URL"
                              solo
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="2" class="pt-0">
                            <v-btn color="primary" :loading="loader"  block height="48" @click="submitPage" >
                                {{$route.query.action}}
                            </v-btn>
                        </v-col>
                    </v-row>
                    <div class="builder">
                        <elements-loader :elements="pageData.content.elements"></elements-loader>
                    </div>
                </v-col>
                <v-col cols="3">
                    <page-meta :metaData="pageData.content.metaData"></page-meta>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import elementsLoader from "./builder/elementsLoader";
    import user from "../../../utils/user";
    import pageMeta from "./metaData/pageMeta";
    export default {
        name: "pageForm",
        components: {
            pageMeta,
          elementsLoader
        },
        data() {
            return {
                pageData: {
                    title: '',
                    slug: '',
                    content: {
                        elements: [],
                        metaData: {
                           seo: {
                               titleTag: '',
                               metaDescription: '',
                               allowIndexing: true
                           }
                        }
                    }
                },
                loader: false
            }
        },
        mounted() {
          if (this.$route.query.action === 'update')  {
              this.getPage()
          }
        },
        methods: {
            submitPage () {
                this.$store.dispatch('setLoader', true)
                let request = ''
                if (this.$route.query.action === 'update') {
                     request = this.$http.put(`/pages/${this.$route.query.id}`,this.pageData)
                } else {
                    request = this.$http.post('/pages',this.pageData)
                }
                request.then(response=>{
                    this.$router.push({path: '/page-form',query: {action: 'update', id:response.data.data.id}})
                    this.$store.dispatch('setLoader', false)
                })
                request.catch(error=>{
                    this.$store.dispatch('setLoader', false)
                    this.$store.dispatch('setLoader', false)
                    if (error.response.status === 403 || error.response.status) {
                        user.logOut()
                    }
                })
            },
            getPage () {
                this.$store.dispatch('setLoader', true)
                this.$http.get(`pages/${this.$route.query.id}`)
                .then(response=>{
                    this.pageData = response.data.data
                    this.$store.dispatch('setLoader', false)
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

</style>
