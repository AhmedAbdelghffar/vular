<template>
  <div class="style-configuration">
    <v-btn color="primary"  fab small elevation="0">
      <v-icon class="mdi-spin" small>mdi-cog</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: "styleConfiguration"
  }
</script>

<style scoped lang="scss">
.style-configuration{
  position: fixed;
  bottom: 10%;
  z-index: 1000;
  right: 0;
}
</style>
