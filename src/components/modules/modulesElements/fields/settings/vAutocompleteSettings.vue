<template>
    <div>
        <label for="" class="mb-2">{{field.name}}: </label>
        <v-autocomplete
                solo
                v-model="data[field.key]"
                :items="field.type.options.selectionOptions"
                :multiple="field.type.options.multiple"
                :chips="field.type.options.multiple"
        ></v-autocomplete>
    </div>
</template>

<script>
    export default {
        name: "vTextFieldSettings",
        props: {
            field: {
                type: Object,
                default: ()=>{
                    return {}
                }
            },
            data: {
                type: Object,
                default: ()=> {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>

</style>