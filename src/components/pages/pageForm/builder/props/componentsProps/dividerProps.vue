<template>
    <v-tabs v-model="tab">
        <v-tab>
            Other
        </v-tab>
        <v-tab-item>
            <common-props :anotherFields="props.another"></common-props>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import commonProps from "../commonProps";

    export default {
        name: "buttonProps",
        components: {commonProps},
        props: {
            props: {
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
        }
    }
</script>

<style scoped>

</style>