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
                <label class="mb-3">Text: </label>
                <v-text-field
                        v-model="props.content.text"
                        label="Button"
                        solo
                ></v-text-field>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label class="mb-3">Url: </label>
                <v-text-field
                        v-model="props.content.url"
                        label="/home"
                        solo
                ></v-text-field>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <v-switch
                        v-model="props.content.newTab"
                        label="New Tab"
                ></v-switch>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label for="">Icon: </label>
                <icon-picker v-model="props.content.icon"></icon-picker>
            </div>
        </v-tab-item>
        <v-tab-item>
            <div class="prop-input">
                <label for="">Background color: </label>
                <swatches show-fallback colors="text-advanced" v-model="props.style.backgroundColor" />
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label for="">Text color: </label>
                <swatches show-fallback colors="text-advanced" v-model="props.style.textColor" />
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label for="">Icon color: </label>
                <swatches show-fallback colors="text-advanced" v-model="props.style.iconColor" />
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <v-switch
                        v-model="props.style.rounded"
                        label="Rounded"
                ></v-switch>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <v-switch
                        v-model="props.style.outlined"
                        label="Outlined"
                ></v-switch>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <v-switch
                        v-model="props.style.tile"
                        label="Tile"
                ></v-switch>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <v-switch
                        v-model="props.style.block"
                        label="Block"
                ></v-switch>
            </div>
            <v-divider></v-divider>
            <div class="prop-input mt-12">
                <v-slider
                        class=""
                        v-model="props.style.shadow"
                        min="0"
                        max="20"
                        thumb-label="always"
                        label="Shadow"
                ></v-slider>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label>Button alignment: </label>
                <v-select
                    solo
                    v-model="props.style.buttonAlign"
                    :items="['left','center','right']"
                ></v-select>
            </div>
            <v-divider></v-divider>
            <div class="prop-input">
                <label>Icon Position</label>
                <v-select
                        solo
                        v-model="props.style.iconPosition"
                        :items="['left','right']"
                ></v-select>
            </div>
        </v-tab-item>
        <v-tab-item>
            <common-props :anotherFields="props.another"></common-props>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import commonProps from "../commonProps";
    import iconPicker from "../../../../../../common/iconPicker";
    import Swatches from 'vue-swatches'
    export default {
        name: "buttonProps",
        components: {commonProps,iconPicker,Swatches },
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
