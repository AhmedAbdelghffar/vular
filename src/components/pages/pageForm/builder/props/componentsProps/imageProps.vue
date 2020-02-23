<template>
    <v-tabs v-model="tab">
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
                <label class="mb-3">Image: </label>
                <drop-zone-image-uploader :url="props.content.url" @onImageUpload="props.content.url = $event"></drop-zone-image-uploader>
            </div>
        </v-tab-item>
        <v-tab-item>
            <div class="prop-input">
                <label for="">Position: </label>
                <v-select
                    solo
                    v-model="props.content.position"
                    :items="['left','center','right']"
                ></v-select>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label for="">Width: </label>
                <v-text-field
                        v-model="props.style.width"
                        solo
                        label="20"
                >
                </v-text-field>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label for="">Height: </label>
                <v-text-field
                        v-model="props.style.height"
                        solo
                        label="20"
                >
                </v-text-field>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label for="">Object fit </label>
                <v-select
                        v-model="props.style.objectFit"
                        solo
                        label="Object fit"
                        :items="['cover','contain']"
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
    import imageUploader from "../../../../../common/imageUploader";
    import dropZoneImageUploader from "../../../../../common/dropZoneImageUploader";
    export default {
        name: "imageProps",
        components: {imageUploader, commonProps,dropZoneImageUploader},
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
                headers: {
                    'Authorization' : `Bearer ${this.$store.state.user.userToken}`
                }
            }
        }
    }
</script>

<style scoped>

</style>