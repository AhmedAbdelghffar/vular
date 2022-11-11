<template>
    <div class="module-list module-screen">
        <v-container fluid>
            <v-row>
                <v-col cols="3"
                       col-md-3
                       v-for="(module,index) in modulesList"
                       :key="index"
                >
                    <v-card class="text-center pa-4" color="" >
                        <div class="text-right">
                            <v-btn small depressed fab @click="cloneModule(module)">
                                <v-icon small>mdi-content-copy</v-icon>
                            </v-btn>
                            <v-btn  depressed fab   small class="ml-3" @click="deleteModule(module,index)">
                                <v-icon small>mdi-delete-outline</v-icon>
                            </v-btn>
                        </div>
                        <div class="module-list-card">
                            <div>
                                <h3>{{module.name}}</h3>
                            </div>
                        </div>
                        <div class="d-flex">
                            <v-btn color="primary" @click="$router.push({path: '/module-configuration-form',query: {action: 'update',id: module.id}})">Configure</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="primary"  @click="$router.push({path: '/module-elements-list',query: {action: 'update',id: module.id}})" >Edit Data</v-btn>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="3" col-md-3>
                    <v-card class="text-center pa-4 module-list-card-add" color="primary" dark @click="$router.push({path: '/module-configuration-form',query: {action: 'publish'}})">
                        <div class="module-list-card">
                            <v-icon class="mr-3" large>mdi-plus-box</v-icon>
                            <h3>
                                Add new Module
                            </h3>
                        </div>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import user from "../../../utils/user";
    export default {
        name: "modulesList",
        data() {
            return {
                modulesList: []
            }
        },
        mounted() {
            this.getModules()
        },
        methods: {
            getModules () {
                this.$store.dispatch('setLoader', true)
                this.$http.get('modules')
                    .then(response=>{
                        this.modulesList = response.data.data
                        this.$store.dispatch('setLoader', false)
                    })
                    .catch(error=>{
                        this.$store.dispatch('setLoader', false)
                        if (error.response.status === 403 || error.response.status) {
                            user.logOut()
                        }
                      this.$store.dispatch('setLoader', false)
                    })
            },
            cloneModule (module) {
                this.$store.dispatch('setLoader', true)
                this.$http.post('modules',{
                    title: `${module.title} Copy`,
                    slug:  `${module.slug}-copy`,
                    content: module.content
                })
                    .then(response=>{
                        this.$store.dispatch('setLoader', false)
                        this.modulesList.push(response.data.data)
                    })
                    .catch(error=>{
                        this.$store.dispatch('setLoader', false)
                        this.$store.dispatch('setLoader', false)
                        if (error.response.status === 403 || error.response.status) {
                            user.logOut()
                        }
                    })
            },
            deleteModule (module,index) {
                this.$store.dispatch('setLoader', true)
                this.$http.delete(`modules/${module.id}`)
                    .then(response=>{
                        this.$store.dispatch('setLoader', false)
                        this.modulesList.splice(index,1)
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
    .module-list-card {
        min-height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .module-list-card-add {
        height: 100%;
        min-height: 0;
    }
</style>
