<template>
    <v-overlay :value="loader" :opacity=".9" color="white">
        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
    </v-overlay>
</template>

<script>
    export default {
        name: "loader",
        computed: {
            loader() {
                return this.$store.state.helpers.loader
            }
        }
    }
</script>

<style scoped>

</style>