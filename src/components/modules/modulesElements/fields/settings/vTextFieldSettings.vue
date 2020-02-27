<template>
    <div>
        <label for="" class="mb-2">{{field.name}}: </label>
        <v-text-field
            solo
            v-model="data[field.key]"
        ></v-text-field>
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