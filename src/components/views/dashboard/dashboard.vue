<template>
  <div class="dashboard view">
    <div class="section">
      <v-container fluid>
        <v-row align="stretch">

          <v-col cols="12" md="3">
            <v-card class="pa-5 card-hover-primary-bg fill-height" to="/pages/page-form?action=publish">
              <v-row align="center">
                <v-col cols="8">
                  <h3 class="text-uppercase mt-2">Add new page</h3>
                  <p class="mb-0 text-caption">Create new page in page builder</p>
                </v-col>
                <v-col cols="4" class="text-right">
                  <v-icon large>mdi-file-document-multiple</v-icon>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="pa-5 card-hover-primary-bg fill-height" to="/style">
              <v-row align="center">
                <v-col cols="8">
                  <h3 class="text-uppercase mt-2">change website style</h3>
                  <p class="mb-0 text-caption">Create new page in page builder</p>
                </v-col>
                <v-col cols="4" class="text-right">
                  <v-icon large>mdi-brush</v-icon>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="pa-5 card-hover-primary-bg fill-height" to="/menu">
              <v-row align="center">
                <v-col cols="8">
                  <h3 class="text-uppercase mt-2">Edit website menu</h3>
                  <p class="mb-0 text-caption">Create new page in page builder</p>
                </v-col>
                <v-col cols="4" class="text-right">
                  <v-icon large>mdi-page-layout-header</v-icon>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="pa-5 card-hover-primary-bg fill-height" to="/users">
              <v-row align="center">
                <v-col cols="8">
                  <h3 class="text-uppercase mt-2">manage users</h3>
                  <p class="mb-0 text-caption">Create new page in page builder</p>
                </v-col>
                <v-col cols="4" class="text-right">
                  <v-icon large>mdi-account</v-icon>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </div>
  </div>
</template>

<script>
  export default {
    name: "dashboard"
  }
</script>

<style scoped>

</style>
