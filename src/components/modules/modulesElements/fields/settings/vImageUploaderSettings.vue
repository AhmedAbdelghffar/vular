<template>
    <div>
        <label for="" class="mb-2">{{field.name}}: </label>
        <drop-zone-image-uploader :url="data[field.key]" @onImageUpload="data[field.key] = $event"></drop-zone-image-uploader>
    </div>
</template>

<script>
    import dropZoneImageUploader from "../../../../common/dropZoneImageUploader";
    export default {
        name: "vTextImageSettings",
        components: {
            dropZoneImageUploader
        },
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
                this.data[this.field.key] = ''
            }
        }
    }
</script>

<style scoped>

</style>