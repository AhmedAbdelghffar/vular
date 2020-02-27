<template>
    <div class="mb-10">
        <label for="" class="mb-2">{{field.name}}: </label>
        <tinymce id="d1"
                 solo
                 v-model="data[field.key]"
        ></tinymce>
    </div>
</template>

<script>
    export default {
        name: "vTextFieldSettings",
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
                tab: 0,
                tinyOptions: {
                    'height': 500
                }
            }
        },
        mounted() {
            if (!this.data[this.field.key]) {
                this.data[this.field.key] = ''
            }
            if (tinymce.activeEditor !== null && 'parser' in tinymce.activeEditor && 'parse' in tinymce.activeEditor.parser ) {  // When you first load, you rely on the content second times in V-model to use the setContent method to assign.
                tinymce.activeEditor.setContent(this.data[this.field.key], { format: 'raw' });
            }
        }
    }
</script>

<style scoped>

</style>