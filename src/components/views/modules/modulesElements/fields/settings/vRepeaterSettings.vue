<template>
    <div>
        <label for="" class="mb-2">{{field.name}}: </label>
        <br>
        {{field.type.options.fields}}
        <br>
        {{data[field.key]}}
        <v-card color="#eee" v-for="(element,index) in data[field.key].fields" :key="index">
            <fields-group :fields="field.type.options.fields" :data="data[field.key]"></fields-group>
        </v-card>
        <v-btn @click="addFields" block>Add {{field.name}}</v-btn>
    </div>
</template>

<script>
    import fieldsGroup from "../fieldsGroup";

    export default {
        name: "vTextFieldSettings",
        components: {fieldsGroup},
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
        mounted() {
            if (!this.data[this.field.key]) {
                this.data[this.field.key]= {
                    name: this.field.name,
                    fields: []
                }
            }
        },
        methods: {
            addFields () {
                let fields = {}
                for (let i = 0; i<this.field.type.options.fields.length;i++) {
                    fields[this.field.type.options.fields[i].key] = ''
                }
                this.data[this.field.key].fields.push(fields)
            }
        }
    }
</script>

<style scoped>

</style>
