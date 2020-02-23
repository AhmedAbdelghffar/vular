<template>
    <div class="components-loader">
        <draggable v-model="col.components" group="components" @start="drag=true" @end="drag=false" handle=".components-header">
            <v-card
                    v-for="(comp,index) in col.components"
                    class="pa-5 ma-3 components-header"
                    color="#F8FDFF "
            >
                <div class="element-header d-flex align-center" @click="editComp(comp)">
                    <h5>{{comp.name}}</h5>
                    <v-spacer></v-spacer>
                    <v-icon small @click="editComp(comp)">mdi-file-edit</v-icon>
                    <v-icon small @click="cloneComp(comp)">mdi-content-copy</v-icon>
                    <v-icon small @click="deleteComp(index)">delete</v-icon>
                </div>
                <div class="element-content">

                </div>
            </v-card>
        </draggable>

        <v-btn block elevation="0" @click="componentListDialog = true" class="mt-3"> <v-icon>mdi-plus</v-icon> Add Component </v-btn>
        <v-dialog v-model="componentListDialog" max-width="700">
            <components-list-dialog @addComponent="addComponent"></components-list-dialog>
        </v-dialog>
        <v-dialog v-model="componentPropsDialog" max-width="700">
            <component-props-loader :comp="componentToEdit" @closeDialog="componentPropsDialog = false"></component-props-loader>
        </v-dialog>
    </div>
</template>

<script>
    import componentsListDialog from "./componentsListDialog";
    import componentPropsLoader from "./props/componentPropsLoader";
    import draggable from 'vuedraggable'
    import _ from 'lodash'
    export default {
        name: "componentsLoader",
        components: {
            componentsListDialog,
            draggable,
            componentPropsLoader
        },
        props: {
            col: {
                type: Object,
                default: ()=> {
                    return {}
                }
            }
        },
        data() {
            return {
                componentListDialog: false,
                componentPropsDialog: false,
                componentToEdit: {}
            }
        },
        methods: {
            addComponent(item) {
                this.col.components.push(item)
                this.componentListDialog = false
            },
            editComp(comp) {
                this.componentToEdit = comp
                this.componentPropsDialog = true
            },
            cloneComp(comp) {
                let newCol = _.cloneDeep(comp)
                this.col.components.push(newCol)
            },
            deleteComp(index) {
                this.col.components.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>