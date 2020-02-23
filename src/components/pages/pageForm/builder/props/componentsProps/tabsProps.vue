<template>
    <v-tabs v-model="tab">
        <v-tab>
            Content
        </v-tab>
        <v-tab>
            Other
        </v-tab>
        <v-tab-item>
            <draggable class="" v-model="props.content.textList" group="tabs" @start="drag=true" @end="drag=false" handle=".tabs-prop">
                <v-card
                        color="#eee"
                        v-for="(item,index) in props.content.textList"
                        class="pa-4 mt-3 tabs-prop "
                >
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <v-icon small @click="cloneTab(item)">mdi-content-copy</v-icon>
                        <v-icon small @click="deleteTab(index)">delete</v-icon>
                    </div>
                    <div class="prop-input">
                        <label class="mb-3">Title: </label>
                        <v-text-field
                                v-model="item.tabTitle"
                                label="/home"
                                solo
                        ></v-text-field>
                    </div>
                    <div class="prop-input">
                        <label class="mb-3">Content: </label>
                        <v-textarea
                                v-model="item.tabContent"
                                solo
                        ></v-textarea>
                    </div>
                </v-card>
            </draggable>
            <v-btn block elevation="0" @click="addTab" class="mt-3"> <v-icon>mdi-plus</v-icon> Add Tab </v-btn>
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
    export default {
        name: "tabsProps",
        components: {commonProps,draggable},
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
            addTab() {
                this.props.content.textList.push(  {
                    tabTitle: 'Title',
                    tabContent: ''
                })
            },
            cloneTab(tab) {
                let newTab = _.cloneDeep(tab)
                this.props.content.textList.push(newTab)
            },
            deleteTab(index) {
                this.props.content.textList.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>