<template>
    <v-card>
       <v-card-title
               class="primary white--text"
               primary-title
       >
            {{comp.name}}
       </v-card-title>
        <v-card-text>
            <component :is="componentFile" :props="comp.props"></component>
        </v-card-text>
        <v-card-actions class="text-center">
            <v-btn block color="primary" @click="$emit('closeDialog')">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "componentProps",
        props: {
            comp: {
                type: Object,
                default: ()=> {
                    return {}
                }
            }
        },
        data () {
            return {
                tab: 0,
            }
        },
        computed: {
            componentFile() {
                let fileName = this.comp.file
                return () => import(`./componentsProps/${fileName}.vue`);
            }
        }
    }
</script>

<style scoped>

</style>