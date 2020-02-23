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
                <label class="mb-3">Image: </label>
                <drop-zone-image-uploader :url="props.content.img" @onImageUpload="props.content.img = $event"></drop-zone-image-uploader>
            </div>
            <div class="prop-input">
                <label class="mb-3">Title: </label>
                <v-text-field
                        v-model="props.content.title"
                        solo
                ></v-text-field>
            </div>
            <div class="prop-input">
                <label class="mb-3">Link: </label>
                <v-text-field
                        v-model="props.content.link"
                        solo
                        label="/home-page"
                ></v-text-field>
            </div>
            <div class="prop-input">
                <label class="mb-3">Description: </label>
                <v-textarea
                        v-model="props.content.description"
                        solo
                ></v-textarea>
            </div>

        </v-tab-item>
        <v-tab-item>
            <common-props :anotherFields="props.another"></common-props>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import commonProps from "../commonProps";
    import _ from "lodash";
    import draggable from 'vuedraggable'
    import dropZoneImageUploader from "../../../../../common/dropZoneImageUploader";
    export default {
        name: "imageCardProps",
        components: {commonProps,draggable,dropZoneImageUploader},
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
                tinyOptions: {
                    'height': 200
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>