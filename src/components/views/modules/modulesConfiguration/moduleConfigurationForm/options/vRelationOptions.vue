<template>
    <v-row class="mt-0">
        <v-col cols="8">
            <label for="" class="mb-2">Module:</label>
            <v-autocomplete
                    v-model="options.moduleId"
                    solo
                    :items="modulesList"
                    item-text="name"
                    item-value="id"
            ></v-autocomplete>
        </v-col>
        <v-col cols="4">
            <label for="" class="mb-2">Multiple Selection</label>
            <v-switch
                    v-model="options.multiple"
            >
            </v-switch>
        </v-col>
    </v-row>
</template>

<script>
    import user from "../../../../../../utils/user";

    export default {
        name: "vRelationOptions",
        mounted() {
            this.getModules()
        },
        props: {
            options: {
                type: Object,
                default: ()=> {
                    return {}
                }
            }
        },
        data() {
            return {
                modulesList: []
            }
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
                    })
            },
        }
    }
</script>

<style scoped>

</style>
