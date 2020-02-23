<template>
    <div class="col-loader">
            <draggable class="row" v-model="element.cols" group="cols" @start="drag=true" @end="drag=false" handle=".col-header">
                <v-col
                    v-for="(col,index) in element.cols"
                    :cols="col.props.general.width"
                    class=""
                 >
                    <v-card
                            class="pa-2 mt-3"
                            elevation="1"
                            color="#F8F8F8"
                    >
                        <div class="element-header col-header d-flex align-center">
                            <v-icon @click="col.props.general.width--" :disabled="col.props.general.width <= 3 " small >mdi-minus</v-icon>
                            <h5 class="pa-2">%{{Math.trunc(col.props.general.width * 100 /12)}}</h5>

                            <v-icon @click="col.props.general.width++" :disabled="col.props.general.width >= 12" small>mdi-plus</v-icon>
                            <v-spacer></v-spacer>
                            <v-icon small @click="editCol(col)">mdi-file-edit</v-icon>
                            <v-icon small @click="cloneCol(col)">mdi-content-copy</v-icon>
                            <v-icon small @click="deleteCol(index)">delete</v-icon>
                        </div>
                        <div class="element-content">
                            <components-loader :col="col"></components-loader>
                        </div>
                    </v-card>
                </v-col>
            </draggable>
        <v-btn block elevation="0" @click="addCol" class="mt-3"> <v-icon>mdi-plus</v-icon> Add Column </v-btn>
        <v-dialog v-model="colsDialog" max-width="700">
            <cols-props @closeDialog="colsDialog = false" :props="colToEdit.props"></cols-props>
        </v-dialog>
    </div>
</template>

<script>
    import anotherFields from "../../../../utils/anotherFields";
    import colsProps from "./props/colsProps";
    import draggable from 'vuedraggable'
    import componentsLoader from "./componentsLoader";
    import _ from 'lodash'
    export default {
        name: "colsLoader",
        props: {
            element: {
                type:Object,
                default: ()=> {
                    return {}
                }
            }
        },
        components: {
            componentsLoader,
            draggable,
            colsProps
        },
        data() {
            return {
                colsDialog: false,
                colToEdit: {}
            }
        },
        methods: {
            addCol() {
                this.element.cols.push({
                    props: {
                        general: {
                            width: 12,
                            itemPadding: '15px'
                        },
                        another: anotherFields
                    },
                    components: []
                })
            },
            cloneCol(col) {
                let newCol = _.cloneDeep(col)
                this.element.cols.push(newCol)
            },
            deleteCol(index) {
                this.element.cols.splice(index,1)
            },
            editCol(element) {
                this.colToEdit = element
                this.colsDialog = true
            }
        }
    }
</script>

<style scoped>

</style>