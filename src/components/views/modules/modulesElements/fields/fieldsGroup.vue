<template>
    <div class="fields-group">
        <div v-for="(field,index) in fields" :key="index">
            <single-field :field="field" :data="data"></single-field>
        </div>
    </div>
</template>

<script>
    import singleField from "./singleField";
    export default {
        name: "fieldsGroup",
        components: {
            singleField
        },
        props: {
            fields: {
                type: Array,
                default: ()=> {
                    return []
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
