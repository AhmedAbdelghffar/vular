<template>
    <div>
        <label for="" class="mb-2">{{field.name}}: </label>
        <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="data[field.key]"
                transition="scale-transition"
                offset-y
                min-width="290px"
        >
            <template v-slot:activator="{ on }">
                <v-text-field
                        v-model="data[field.key]"
                        prepend-icon="event"
                        solo
                        readonly
                        v-on="on"
                ></v-text-field>
            </template>
            <v-time-picker v-model="data[field.key]" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(data[field.key])">OK</v-btn>
            </v-time-picker>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: "vTextTimePickerSettings",
        props: {
            field: {
                type: Object,
                default: ()=>{
                    return {}
                }
            },
            data: {
                type: Object,
                default: ()=> {
                    return {}
                }
            }
        },
        data () {
            return {
                menu: false,
            }
        }
    }
</script>

<style scoped>

</style>