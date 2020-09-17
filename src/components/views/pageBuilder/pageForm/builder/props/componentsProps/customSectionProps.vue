<template>
    <v-tabs v-model="tab">
        <v-tab>
            Content
        </v-tab>
        <v-tab>
            Other
        </v-tab>
        <v-tab-item>
            <div class="prop-input">
                <label class="mb-3">Name: </label>
                <v-text-field
                        v-model="props.content.name"
                        label="Name"
                        solo
                ></v-text-field>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label class="mb-3">Slug: </label>
                <v-text-field
                        v-model="props.content.slug"
                        label="Slug"
                        solo
                ></v-text-field>
            </div>
        </v-tab-item>
        <v-tab-item>
            <common-props :anotherFields="props.another"></common-props>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import commonProps from "../commonProps";
    export default {
        name: "customSectionProps",
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
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>