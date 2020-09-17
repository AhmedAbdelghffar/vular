<template>
    <v-tabs v-model="tab" lazy>
        <v-tab>
            Content
        </v-tab>
        <v-tab>
            Style
        </v-tab>
        <v-tab>
            Other
        </v-tab>
        <v-tab-item>
            <div class="prop-input">
                <label class="mb-3">Text: </label>
                <v-text-field
                        v-model="props.content.text"
                        label="Title Text"
                        solo
                ></v-text-field>
            </div>
        </v-tab-item>
        <v-tab-item>
            <div class="prop-input">
                <label for="">Text color: </label>
                <swatches show-fallback colors="text-advanced" v-model="props.style.textColor" />
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label for="">Font size: </label>
                <v-text-field
                        v-model="props.style.fontSize"
                        solo
                >
                </v-text-field>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label for="">Line height: </label>
                <v-text-field
                        v-model="props.style.lineHeight"
                        solo
                        label="20px"
                >
                </v-text-field>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label for="">Font Weight: </label>
                <v-select
                        v-model="props.style.fontWeight"
                        solo
                        label="Font weight"
                        :items="['200','300','400','500','600','700','800','900']"
                >
                </v-select>
            </div>
        </v-tab-item>
        <v-tab-item>
            <common-props :anotherFields="props.another"></common-props>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import commonProps from "../commonProps";
    import Swatches from 'vue-swatches'
    export default {
        name: "titleProps",
        components: {commonProps, Swatches},
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
