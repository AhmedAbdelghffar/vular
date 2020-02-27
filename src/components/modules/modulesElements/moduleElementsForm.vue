<template>
<div class="page-view module-elements-form">
    <v-container>
        <v-row>
            <v-col cols="4">
                <v-text-field
                        v-model="moduleData.name"
                        :placeholder="`${moduleConfiguration.name} Name` "
                        solo
                >
                </v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field
                        v-model="moduleData.slug"
                        :placeholder="`${moduleConfiguration.name} Slug` "
                        solo
                >
                </v-text-field>
            </v-col>
            <v-col>
                <v-btn color="primary" :loading="loader" class="elevation-5" block height="48" @click="saveElementData">
                    {{$route.query.action}}
                </v-btn>
            </v-col>
        </v-row>
        <div class="element-fields" v-if="moduleConfiguration.conf">
            <fields-group :fields="moduleConfiguration.conf.fields" :data="moduleData.content"></fields-group>
        </div>
    </v-container>
</div>
</template>

<script>
    import user from "../../../utils/user";
    import fieldsGroup from "./fields/fieldsGroup";
    export default {
        name: "moduleElementsForm",
        components: {
            fieldsGroup
        },
        data () {
            return {
                moduleConfiguration: {},
                moduleData: {
                    name: '',
                    slug: '',
                    module_id: this.$route.query.moduleId,
                    content: {

                    }
                },
                loader: false
            }
        },
        mounted() {
            this.getModuleConf()
        },
        methods: {
            getModuleConf () {
                this.$store.dispatch('setLoader', true)
                this.$http.get(`modules/${this.$route.query.moduleId}`)
                    .then(response=>{
                        this.moduleConfiguration = response.data.data
                        if (this.$route.query.action === 'update') {
                            this.getModuleData()
                        } else {
                            this.$store.dispatch('setLoader', false)
                        }

                    })
                    .catch(error=>{
                        this.$store.dispatch('setLoader', false)
                        if (error.response.status === 403) {
                            user.logOut()
                        }
                    })
            },
            getModuleData () {
                this.$http.get(`module-elements/${this.$route.query.id}`)
                    .then(response=>{
                        this.moduleData = response.data.data
                        this.$store.dispatch('setLoader', false)
                    })
                    .catch(error=>{
                        this.$store.dispatch('setLoader', false)
                        if (error.response.status === 403) {
                            user.logOut()
                        }
                    })
            },
            saveElementData() {
                this.$store.dispatch('setLoader', true)
                let request = ''
                if (this.$route.query.action === 'update') {
                    this.moduleData.module_id = this.$route.query.moduleId
                    delete this.moduleData.id
                    request = this.$http.put(`/module-elements/${this.$route.query.id}`,this.moduleData)
                } else {
                    request = this.$http.post('/module-elements',this.moduleData)
                }
                request.then(response=>{
                    this.$router.push({path: '/module-elements-form',query: {action: 'update', id:response.data.data.id,moduleId: this.$route.query.moduleId}})
                    this.$store.dispatch('setLoader', false)
                })
                request.catch(error=>{
                    this.$store.dispatch('setLoader', false)
                    this.$store.dispatch('setLoader', false)
                    if (error.response.status === 403 && error.response.status) {
                        user.logOut()
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>