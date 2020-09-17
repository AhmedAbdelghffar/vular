<template>
    <div class="filed-settings">
        <v-row>
            <v-col cols="4">
                <label for="" class="mb-2">Name:</label>
                <v-text-field
                    solo
                    v-model="fieldSettings.name"
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <label class="mb-2" for="">Key:</label>
                <v-text-field
                        solo
                        v-model="fieldSettings.key"
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <label class="mb-2" for="">type:</label>
                <v-autocomplete
                        solo
                        v-model="fieldSettings.type"
                        :items="fieldsType"
                        item-value="slug"
                        item-text="name"
                        return-object
                ></v-autocomplete>
            </v-col>
            <v-col cols="12" v-if="fieldSettings.type.options">
                <component :is="getOptionFileName" :options="fieldSettings.type.options"></component>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "fieldSettings",
        props: {
            fieldSettings: {
                type: Object,
                default: ()=>{
                    return {}
                }
            }
        },
        data() {
            return {
                fieldsType: [
                    {
                        name: 'Text Field',
                        slug: 'vTextField',
                    },
                    {
                        name: 'Text Area',
                        slug: 'vTextarea'
                    },
                    {
                        name: 'Text Editor',
                        slug: 'tinymce'
                    },
                    {
                        name: 'Select',
                        slug: 'vAutocomplete',
                        options: {
                            multiple: false,
                            selectionOptions: ['option 1', 'option 2']
                        }
                    },
                    {
                        name: 'Image',
                        slug: 'vImageUploader'
                    },
                    {
                        name: 'Date Picker',
                        slug: 'vDatePicker'
                    },
                    {
                        name: 'Time Picker',
                        slug: 'vTimePicker'
                    },
                    {
                        name: 'Switch',
                        slug: 'vSwitch'
                    },
                    {
                        name: 'Relation',
                        slug:'vRelation',
                        options: {
                            moduleId: null,
                            multiple: false
                        }
                    },
                    {
                        name: 'Repeater',
                        slug: 'vRepeater',
                        options: {
                            fields: []
                        }
                    }
                ],
            }
        },
        methods: {
        },
        computed: {
            getOptionFileName () {
                let fileName = `${this.fieldSettings.type.slug}Options`
                return () => import(`./options/${fileName}.vue`);
            }
        }
    }
</script>

<style scoped>

</style>