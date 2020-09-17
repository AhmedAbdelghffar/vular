<template>
    <div>
        <component :is="getSettingsFileName" :field="field" :data="data"></component>
    </div>
</template>

<script>
    export default {
        name: "singleField",
        props: {
            field: {
                type: Object,
                default: ()=> {
                    return {}
                }
            },
            data: {
                type: Object,
                default: ()=> {
                    return {}
                }
            }
        },
        computed: {
            getSettingsFileName () {
                let fileName = `${this.field.type.slug}Settings`
                return () => import(`./settings/${fileName}.vue`);
            }
        }
    }
</script>

<style scoped>

</style>