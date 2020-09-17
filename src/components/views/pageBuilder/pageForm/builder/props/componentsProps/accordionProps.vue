<template>
    <v-tabs v-model="tab">
        <v-tab>
            Content
        </v-tab>
        <v-tab>
            Other
        </v-tab>
        <v-tab-item>
            <draggable class="" v-model="props.content.textList" group="accordion" @start="drag=true" @end="drag=false" handle=".accordion-prop">
                <v-card
                    color="#eee"
                    v-for="(item,index) in props.content.textList"
                    :key="index"
                    class="pa-4 mt-3 accordion-prop "
                >
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <v-icon small @click="cloneAcco(item)">mdi-content-copy</v-icon>
                        <v-icon small @click="deleteAcco(index)">delete</v-icon>
                    </div>
                    <div class="prop-input">
                        <label class="mb-3">Title: </label>
                        <v-text-field
                                v-model="item.accordionTitle"
                                label="/home"
                                solo
                        ></v-text-field>
                    </div>
                    <div class="prop-input">
                        <label class="mb-3">Content: </label>
                        <v-textarea
                            v-model="item.accordionContent"
                            solo
                        ></v-textarea>
                    </div>
                </v-card>
            </draggable>
            <v-btn block elevation="0" @click="addAcco" class="mt-3"> <v-icon>mdi-plus</v-icon> Add Accordion </v-btn>
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
        name: "accordionProps",
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
            addAcco() {
                this.props.content.textList.push(  {
                    accordionTitle: 'Title',
                    accordionContent: ''
                })
            },
            cloneAcco(acco) {
                let newAcco = _.cloneDeep(acco)
                this.props.content.textList.push(newAcco)
            },
            deleteAcco(index) {
                this.props.content.textList.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>
