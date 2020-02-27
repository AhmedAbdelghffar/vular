<template>
    <div class="field-group">
        <div
                v-for="(field, index) in fields"
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
</template>

<script>
    import fieldSettings from "./fieldSettings";
    export default {
        name: "fields",
        components: {
            fieldSettings
        },
        props: {
            fields: {
                type: Array,
                default: ()=> {
                    return {}
                }
            }
        },
        methods: {
            addField() {
                this.fields.push({
                    name: 'New Field',
                    key: '',
                    type: {
                        name: "Text Field",
                        slug: "vTextField"
                    },
                    options: {}
                })
            },
            deleteField(index) {
                this.fields.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>