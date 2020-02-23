<template>
    <v-tabs v-model="tab">
        <v-tab>
            Content
        </v-tab>
        <v-tab>
            Other
        </v-tab>
        <v-tab-item>
            <tinymce id="d1"
                     :other_options="tinyOptions"
                     v-model="props.content.text"
            ></tinymce>
        </v-tab-item>
        <v-tab-item>
            <common-props :anotherFields="props.another"></common-props>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import commonProps from "../commonProps";
    export default {
        name: "textBlockProps",
       components: {commonProps},
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
                    'height': 500
                }
            }
        },
        mounted() {
            if (tinymce.activeEditor !== null && 'parser' in tinymce.activeEditor && 'parse' in tinymce.activeEditor.parser) {  // When you first load, you rely on the content second times in V-model to use the setContent method to assign.
                tinymce.activeEditor.setContent(this.props.content.text, { format: 'raw' });
            }
        }
    }
</script>

<style scoped>

</style>