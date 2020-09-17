<template>
    <div>
        <div class="image-uploader" :class="{ smallImageUploader: small, uploaded: url  }">
            <v-dropzone
                    :ref="dropZoneId"
                    :id="dropZoneId"
                    :options="dropzoneOptions"
                    @vdropzone-removed-file="vDzRemove"
                    @vdropzone-max-files-exceeded="vDzMaxFilesExceeded"
                    @vdropzone-max-files-reached="vDzMaxFilesReached"
                    @vdropzone-file-added-manually="vDzMounted"
                    @vdropzone-files-added="uploadImage"
            >
            </v-dropzone>
            <div v-if="this.url" :class="`open-image-dialog-${dropZoneId}`" class="replace-image"><span class="d-block">Replace Image</span></div>
            <div v-else :class="`open-image-dialog-${dropZoneId}`" class="upload-image"><span class="d-block">Upload Image</span></div>
        </div>
        <span v-if="!this.url && validation" class="error--text">Image Is Required</span>
    </div>

</template>

<script>
    import vDropzone from 'vue2-dropzone'
    import user from "../../utils/user";
    export default {
        name: "image-uploader",
        props: {
            url: {
                type: String,
                default: ()=>{
                    return ''
                }
            },
            small: {
                type: Boolean,
                default: ()=>{
                    return false
                }
            },
            validation: {
                type: Boolean,
                default: ()=>{
                    return false
                }
            }
        },
        components: {
            vDropzone
        },
        data(){
            return {
                dropZoneId: `vueDropzone${this._uid}`,
                dropzoneOptions: {
                    url: '#',
                    thumbnailWidth: 300,
                    maxFilesize: 5,
                    maxFiles: 2,
                    addRemoveLinks: true,
                    autoProcessQueue: false,
                    acceptedFiles: 'image/*',
                    previewTemplate: this.getTemplate(),
                    dictDefaultMessage: '<i class="fa fa-camera"></i>'
                },
            }
        },
        mounted() {
            this.loadImg()
        },
        methods: {
            vDzRemove (file, error, xhr) {
                console.log('remove')
            },
            vDzMaxFilesExceeded (file) {
                // Disable exceeding maximum allowed files in VueDropzone
                this.$refs[this.dropZoneId].removeFile(file)
            },
            vDzMaxFilesReached () {
                if (this.$refs[this.dropZoneId].dropzone.files.length < 2) {
                    // this.$refs.vueDropzone.enable()
                } else {
                    this.$refs[this.dropZoneId].removeFile(this.$refs[this.dropZoneId].dropzone.files[0])
                }
            },
            vDzMounted () {

            },
            getTemplate() {
                return `

                    <div id="template-preview">
                            <div class="dz-preview dz-file-preview well" id="dz-preview-template">
                                    <div class="preview"><img data-dz-thumbnail /></div>
                            </div>
                    </div>
                    `
            },
            loadImg() {
                if (this.url) {
                    this.$refs[this.dropZoneId].removeAllFiles()
                    let file = { size: 123, name: "Image", type: "image/*" };
                    console.log(`${process.env.VUE_APP_SMALL_IMAGE_PATH}/${this.url}`)
                    this.$refs[this.dropZoneId].manuallyAddFile(file, `${process.env.VUE_APP_SMALL_IMAGE_PATH}/${this.url}`);
                }
            },
            openDialog() {
                // this.$refs.vueDropzone.removeAllFiles()
            },
            uploadImage(file) {
                let files = this.$refs[this.dropZoneId].getAcceptedFiles()
                let formObject = new FormData()
                formObject.append("image", files[0], "filename" + Date.now())
                this.$http_multipart.post('/upload-image',formObject)
                    .then(response=>{
                        this.$emit('onImageUpload', response.data.data.image)
                    })
                    .catch(error=>{
                        if (error.response.status === 401) {
                            user.logOut()
                        }
                    })
            }
        },
        watch: {
            url() {
                this.loadImg()
            }
        }
    }
</script>

<style lang="scss" src="../../styles/components/dropZone.scss" scoped>

</style>
