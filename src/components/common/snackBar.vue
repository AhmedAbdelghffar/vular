<template>
    <v-snackbar @click.prevent v-model="snackbar" :bottom="true" v-if="snackBarMessage"  color="primary">
        {{ snackBarMessage }}
    </v-snackbar>
</template>

<script>
    export default {
        name: "snackbar-message",
        data() {
            return {
                snackbar: false
            }
        },
        computed: {
            snackBarMessage() {
                return this.$store.state.helpers.snackbarMessage;
            }
        },
        watch: {
            snackBarMessage(state) {
                if (state) {
                    this.snackbar = true;
                }
            },
            YourMethod() {

            }
        }
    }
</script>

<style scoped>

</style>