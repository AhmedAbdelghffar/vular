<template>
    <v-tabs v-model="tab">
        <v-tab>
            Content
        </v-tab>
        <v-tab>
            Other
        </v-tab>
        <v-tab-item>
            <draggable class="" v-model="props.content.sliderList" group="slider" @start="drag=true" @end="drag=false" handle=".slider-prop">
                <v-card
                        color="#eee"
                        v-for="(item,index) in props.content.sliderList"
                        :key="index"
                        class="pa-4 mt-3 slider-prop "
                >
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <v-icon small @click="cloneSlider(item)">mdi-content-copy</v-icon>
                        <v-icon small @click="deleteSlider(index)">delete</v-icon>
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
                    <div class="prop-input">
                        <label class="mb-3">Caption position: </label>
                        <v-select
                                v-model="item.captionPosition"
                                solo
                                :items="['left','center','right']"
                        ></v-select>
                    </div>
                </v-card>
            </draggable>
            <v-btn block elevation="0" @click="addSlider" class="mt-3"> <v-icon>mdi-plus</v-icon> Add Slider </v-btn>
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
        name: "sliderProps",
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
            addSlider() {
                this.props.content.sliderList.push(  {
                    url: '',
                    caption: '',
                    captionPosition:''
                })
            },
            cloneSlider(slider) {
                let newSlider = _.cloneDeep(slider)
                this.props.content.sliderList.push(newSlider)
            },
            deleteSlider(index) {
                this.props.content.sliderList.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>
