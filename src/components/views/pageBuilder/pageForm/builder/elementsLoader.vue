<template>
    <div class="elements-loader">
        <div class="builder-elements">
            <draggable v-model="elements" group="sections" @start="drag=true" @end="drag=false" handle=".section-header">
                <v-card
                        class="pa-5 mb-5"
                        v-for="(element,elementIndex) in elements"
                        :key="elementIndex"
                >
                    <div class="element-header section-header d-flex align-center">
                        <p class="mb-0">Section</p>
                        <v-spacer></v-spacer>
                        <v-icon small @click="editElement(element)">mdi-file-edit</v-icon>
                        <v-icon small @click="cloneElement(element)">mdi-content-copy</v-icon>
                        <v-icon small @click="deleteElement(elementIndex)">mdi-delete</v-icon>
                    </div>
                    <div class="element-content">
                        <cols-loader :element="element"></cols-loader>
                    </div>

                </v-card>
            </draggable>
            <v-btn block elevation="0" @click="addSection" class="mt-5"> <v-icon>mdi-plus</v-icon> Add New Section</v-btn>
            <v-dialog v-model="elementDialog" max-width="700">
                <elements-props @closeDialog="elementDialog=false" :props="elementToEdit.props"></elements-props>
            </v-dialog>
        </div>
    </div>
</template>

<script>
    import anotherFields from "../../../../../utils/anotherFields";
    import colsLoader from "./colsLoader";
    import _ from 'lodash'
    import draggable from 'vuedraggable'
    import elementsProps from "./props/elementsProps";
    export default {
        name: "elements-loader",
        props: {
            elements: {
                type: Array,
                default: ()=>{
                    return []
                }
            }
        },
        components: {
            colsLoader,
            draggable,
            elementsProps
        },
        data() {
            return {
                elementDialog: false,
                elementToEdit: {}
            }
        },
        methods: {
            addSection() {
                this.elements.push({
                    cols:[],
                    props:{
                        general: {
                            fullWidth: false,
                            itemPadding: '50px 0 50px 0',
                            verticalAlign: 'flex-start',
                            horizontalAlign: 'flex-start'
                        },
                        background: {
                            url: '',
                            size: 'cover',
                            position: '',
                            color: '#ffffff'
                        },
                        another: anotherFields
                    }
                })
            },
            deleteElement(index) {
                this.elements.splice(index,1)
            },
            cloneElement(element) {
                let newEle = _.cloneDeep(element)
                this.elements.push(newEle)
            },
            editElement(element) {
                this.elementToEdit = element
                this.elementDialog = true
            }
        }
    }
</script>

<style scoped>
    .theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
        background: transparent !important;
    }
</style>
