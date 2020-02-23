<template>
    <div class="icons-picker">
        <v-btn @click="dialog = true">Pick icon
            <i :class="`mdi mdi-${icon}`"></i>
        </v-btn>
        <v-dialog v-model="dialog" max-width="720">
            <v-card-title       class="primary white--text"
                                primary-title>
                Pick Icon
            </v-card-title>
            <v-card class="pa-5 pl-10">
                <v-btn-toggle @change="addIcon" v-model="icon" class="row ma-0">
                    <v-btn width="320" class="text-center" v-for="icon in icons" :value="icon.name">
                        <i :class="`mdi mdi-${icon.name}`"></i>
                        <p class="mb-0 mr-3">
                            {{icon.name}}
                        </p>
                    </v-btn>
                </v-btn-toggle>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import icons from '../../utils/icons'
    export default {
        name: "iconPicker",
        props: ['value'],
        data () {
            return {
                icons,
                icon: '',
                dialog: false
            }
        },
        mounted() {
          this.icon = this.value
        },
        methods:{
            addIcon () {
                this.$emit('input', this.icon)
                this.dialog = false
            }
        }
    }
</script>

<style scoped>
 i {
     font-size: 20px;
 }
    p {
        font-size: 10px !important;
        display: block;
    }
</style>

<style>
    .icons-picker .v-btn__content {
        display: block !important;
    }
</style>