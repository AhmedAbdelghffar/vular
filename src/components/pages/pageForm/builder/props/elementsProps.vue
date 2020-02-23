<template>
    <v-card class="pa-0">
        <v-card-title
                class="primary white--text"
                primary-title
        >
            Section
        </v-card-title>
        <v-card-text class="">
            <v-tabs v-model="tab">
                <v-tab>
                    General
                </v-tab>
                <v-tab>
                    Background
                </v-tab>
                <v-tab>
                    Other
                </v-tab>
                <v-tab-item>
                    <div class="prop-input">
                        <v-switch
                                v-model="props.general.fullWidth"
                                label="Full width"
                        ></v-switch>
                    </div>
                    <v-divider></v-divider>
                    <div class="prop-input">
                        <label class="mb-3">Section Padding: </label>
                        <v-text-field
                                v-model="props.general.itemPadding"
                                label="top right bottom left"
                                solo
                        ></v-text-field>
                    </div>
                    <v-divider></v-divider>
                    <div class="prop-input">
                        <label for="">Vertical Alignment</label>
                        <v-select
                            v-model="props.verticalAlign"
                            solo
                            :items="verticalAlignList"
                        >

                        </v-select>
                    </div>
                    <v-divider></v-divider>
                    <div class="prop-input">
                        <label for="">Vertical Alignment</label>
                        <v-select
                                v-model="props.horizontalAlign"
                                solo
                                :items="horizontalAlignList"
                        >

                        </v-select>
                    </div>
                </v-tab-item>
                <v-tab-item>
                    <div class="prop-input pb-6">
                        <label class="mb-3">Background color: </label>
                        <swatches show-fallback colors="text-advanced" v-model="props.background.color" />
                    </div>
                    <v-divider></v-divider>
                    <div class="prop-input">
                        <label class="mb-3">Background size: </label>
                        <v-select
                                v-model="props.background.size"
                                label=""
                                solo
                                :items="backgroundSizeList"
                        ></v-select>
                    </div>
                    <v-divider></v-divider>
                    <div class="prop-input">
                        <label class="mb-3">Background Position: </label>
                        <v-select
                                v-model="props.background.position"
                                label="top"
                                solo
                                :items="backgroundPositionList"
                        ></v-select>
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
    import Swatches from 'vue-swatches'
    export default {
        name: "elementsProps",
        components: {commonProps,Swatches},
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
                verticalAlignList: ['flex-start','center','flex-end','stretch','baseline'],
                horizontalAlignList: ['flex-start','flex-end','center','space-between','space-evenly'],
                backgroundSizeList: ['cover', 'contain'],
                backgroundPositionList: ['left top', 'left center' , 'left bottom', 'right top' , 'right center' , 'right bottom' , 'center top' , 'center center', 'center bottom']
            }
        }
    }
</script>

<style>
    @import url('~vue-swatches/dist/vue-swatches.min.css');
    .vue-swatches__trigger {
        border: 2px solid #eee;
    }
</style>