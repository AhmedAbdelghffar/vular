<template>
    <div>
        <label class="mb-2" for="">{{field.name}}: </label>
        <v-textarea
                solo
                v-model="data[field.key]"
        ></v-textarea>
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