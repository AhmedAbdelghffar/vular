<template>
 <v-row class="mt-0">
     <v-col cols="8">
         <label for="" class="mb-2">Select Options:</label>
         <v-combobox
                 v-model="options.selectionOptions"
                 multiple
                 solo
                 chips
         ></v-combobox>
     </v-col>
     <v-col cols="4">
         <label for="" class="mb-2">Multiple Selection</label>
         <v-switch
            v-model="options.multiple"
         >
         </v-switch>
     </v-col>
 </v-row>
</template>

<script>
    export default {
        name: "vSelectOptions",
        props: {
            options: {
                type: Object,
                default: ()=> {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>

</style>