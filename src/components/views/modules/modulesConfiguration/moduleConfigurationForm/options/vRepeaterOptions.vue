<template>
    <div>
        <fields :fields="options.fields"></fields>
    </div>
</template>

<script>
    import fields from "../fields";
    export default {
        name: "vRepeaterOptions",
        props: {
            options: {
                type: Object,
                default: ()=> {
                    return {}
                }
            }
        },
        components: {
            fields
        }
    }
</script>

<style scoped>

</style>