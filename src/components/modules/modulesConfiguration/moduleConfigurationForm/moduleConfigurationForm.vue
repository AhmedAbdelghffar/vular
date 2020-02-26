<template>
    <div class="modules-confuration-list page-screen">
        <v-container fluid>
            <v-row>
                <v-col cols="4">
                    <v-text-field
                            v-model="moduleConfiguration.name"
                            placeholder="Module Name"
                            solo
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field
                            v-model="moduleConfiguration.slug"
                            placeholder="Module Slug"
                            solo
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-btn color="primary" :loading="loader" class="elevation-5" block height="48" @click="saveModule">
                        {{$route.query.action}}
                    </v-btn>
                </v-col>
            </v-row>
            <div class="field-group">
                <div
                    v-for="(field, index) in moduleConfiguration.conf.fields"
                    class="mt-5"
                >
                    <v-card class="pa-5" color="#eee">
                        <div class="d-flex">
                            <v-spacer></v-spacer>
                            <v-icon small @click="deleteField(index)">delete</v-icon>
                        </div>
                        <field-settings :fieldSettings="field"></field-settings>
                    </v-card>
                </div>
                <v-btn block elevation="0" @click="addField" class="mt-5"> <v-icon>mdi-plus</v-icon>Add Field</v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
    import fieldSettings from "./fieldSettings";
    import user from "../../../../utils/user";
    export default {
        name: "moduleConfigurationForm",
        components: {
            fieldSettings
        },
        data(){
            return {
            loader: false,
               moduleConfiguration: {
                   name: '',
                   slug: '',
                   conf: {
                       fields: [

                       ]
                   }
               }
            }
        },
        mounted() {
            if (this.$route.query.action === 'update')  {
                this.getModule()
            }
        },
        methods: {
            saveModule() {
                this.$store.dispatch('setLoader', true)
                let request = ''
                if (this.$route.query.action === 'update') {
                    request = this.$http.put(`/modules/${this.$route.query.id}`,this.moduleConfiguration)
                } else {
                    request = this.$http.post('/modules',this.moduleConfiguration)
                }
                request.then(response=>{
                    this.$router.push({path: '/module-configuration-form',query: {action: 'update', id:response.data.data.id}})
                    this.$store.dispatch('setLoader', false)
                })
                request.catch(error=>{
                    this.$store.dispatch('setLoader', false)
                    // this.$store.dispatch('setLoader', false)
                    // if (error.response.status === 403 || error.response.status) {
                    //     user.logOut()
                    // }
                })
            },
            getModule () {
                this.$store.dispatch('setLoader', true)
                this.$http.get(`modules/${this.$route.query.id}`)
                    .then(response=>{
                        this.moduleConfiguration = response.data.data
                        this.$store.dispatch('setLoader', false)
                    })
                    .catch(error=>{
                        this.$store.dispatch('setLoader', false)
                        if (error.response.status === 403) {
                            user.logOut()
                        }
                    })
            },
            addField() {
                this.moduleConfiguration.conf.fields.push({
                    name: 'New Field',
                    key: '',
                    type: 'vTextField',
                    options: {}
                })
            },
            deleteField(index) {
                this.moduleConfiguration.conf.fields.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>