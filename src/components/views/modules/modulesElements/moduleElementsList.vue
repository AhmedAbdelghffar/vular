<template>
    <div class="page-view module-elements-list">
        <v-container>
            <div>
                <v-btn color="primary" @click="$router.push({path: '/module-elements-form',query: {action: 'publish',moduleId: $route.query.id}})">Add New</v-btn>
            </div>
            <v-data-table
                    :headers="headers"
                    :items="moduleElements"
                    class="elevation-1"
            >
                <template v-slot:item.action="{ item }">
                    <v-icon
                            small
                            class="mr-2"
                            @click="$router.push({path: '/module-elements-form',query: {action: 'update', id:item.id, moduleId: $route.query.id}})"
                    >
                        edit
                    </v-icon>
                    <v-icon
                            small
                            @click="deleteElement(item)"
                    >
                        delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-container>
    </div>
</template>

<script>
    import user from "../../../../utils/user";

    export default {
        name: "moduleElementsList",
        data () {
            return {
                moduleElements: [],
                headers: [
                    {
                        text: 'ID',
                        align: 'start',
                        value: 'id',
                    },
                    {
                        text: 'Name',
                        value: 'name',
                    },
                    { text: 'slug', value: 'slug' },
                    { text: 'Actions', value: 'action', sortable: false }
                ]
            }
        },
        mounted() {
            this.getElements()
        },
        methods: {
            getElements () {
                this.$http.get(`module-elements?module_id=${this.$route.query.id}`)
                .then(response=>{
                    this.moduleElements = response.data.data
                })
                .catch(error=> {
                    this.$store.dispatch('setLoader', false)
                    if (error.response.status === 403 && error.response.status) {
                        user.logOut()
                    }
                })
            },
            deleteElement(item) {

            }
        }
    }
</script>

<style scoped>

</style>
