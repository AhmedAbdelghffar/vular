<template>
    <v-tabs v-model="tab">
        <v-tab>
            Content
        </v-tab>
        <v-tab>
            Other
        </v-tab>
        <v-tab-item>
            <draggable class="" v-model="props.content.partnersList" group="partners" @start="drag=true" @end="drag=false" handle=".partners-prop">
                <v-card
                        color="#eee"
                        v-for="(item,index) in props.content.partnersList"
                        :key="index"
                        class="pa-4 mt-3 partners-prop"
                >
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <v-icon small @click="cloneItem(item)">mdi-content-copy</v-icon>
                        <v-icon small @click="deleteItem(index)">delete</v-icon>
                    </div>
                    <div class="prop-input">
                        <label class="mb-3">Image: </label>
                        <drop-zone-image-uploader :url="item.url" @onImageUpload="item.url = $event"></drop-zone-image-uploader>
                    </div>
                    <div class="prop-input">
                        <label class="mb-3">Caption: </label>
                        <v-textarea
                                v-model="item.caption"
                                solo
                        ></v-textarea>
                    </div>
                </v-card>
            </draggable>
            <v-btn block elevation="0" @click="addIem" class="mt-3"> <v-icon>mdi-plus</v-icon> Add Partner </v-btn>
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
    import dropZoneImageUploader from "../../../../../../common/dropZoneImageUploader";
    export default {
        name: "galleryProps",
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
            addIem() {
                this.props.content.partnersList.push(  {
                    url: '',
                    caption: '',
                })
            },
            cloneItem(item) {
                let newItem = _.cloneDeep(item)
                this.props.content.partnersList.push(newItem)
            },
            deleteItem(index) {
                this.props.content.partnersList.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>
