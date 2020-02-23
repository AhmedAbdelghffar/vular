<template>
    <div class="another-fields">
        <div class="prop-input">
            <label class="mb-3">Item Margin: </label>
            <v-text-field
                    v-model="anotherFields.margin"
                    label="top right bottom left"
                    solo
            ></v-text-field>
        </div>
        <v-divider></v-divider>
        <div class="prop-input">
            <label class="mb-3">Extra class name: </label>
            <v-text-field
                    v-model="anotherFields.extraClass"
                    label="Add extra class name for css customization"
                    solo
            ></v-text-field>
        </div>
    </div>
</template>

<script>
    export default {
        name: "commonProps",
        props: {
            anotherFields: {
                type: Object,
                default: ()=> {
                    return ''
                }
            }
        }
    }
</script>

<style scoped>

</style>