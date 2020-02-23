<template>
    <div>
        {{value}}
        <vs-upload @on-success="updateUrl" automatic :limit="1" :action="`http://192.241.234.75:5501/api/upload-image`" :headers="headers" fileName="image" />
    </div>
</template>

<script>
    export default {
        name: "imageUploader",
        props: {
          value: {
            type: String,
            default: ()=> {
                return ''
            }
          }
        },
        data () {
            return {
                tab: 0,
                url: '',
                headers: {
                    'Authorization' : `Bearer ${this.$store.state.user.userToken}`
                }
            }
        },
        methods: {
            updateUrl(event) {
                let url = JSON.parse(event.target.response)
                this.$emit('input', url.data.image)
            }
        }
    }
</script>

<style scoped>

</style>