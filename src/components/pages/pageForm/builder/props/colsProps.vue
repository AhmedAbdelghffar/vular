<template>
    <v-card class="pa-0">
        <v-card-title
                class="primary white--text"
                primary-title
        >
            Column
        </v-card-title>
        <v-card-text class="">
            <v-tabs v-model="tab">
                <v-tab>
                    General
                </v-tab>
                <v-tab>
                    Other
                </v-tab>
                <v-tab-item>
                    <div class="prop-input">
                        <label class="mb-3">Column Padding: </label>
                        <v-text-field
                                v-model="props.general.padding"
                                label="top right bottom left"
                                solo
                        ></v-text-field>
                    </div>
                </v-tab-item>
                <v-tab-item>
                    <common-props :anotherFields="props.another"></common-props>
                </v-tab-item>
            </v-tabs>
        </v-card-text>
        <v-card-actions class="text-center">
            <v-btn block color="primary" @click="$emit('closeDialog')">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import commonProps from "./commonProps";
    export default {
        name: "colsProps",
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