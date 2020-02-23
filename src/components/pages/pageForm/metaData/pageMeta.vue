<template>
  <div class=" mt-10 pa-4">
      <v-row>
          <v-col cols="6">
              <label class="mb-3">Title Tag</label>
              <v-text-field
                solo
                v-model="metaData.titleTag"
                label="Title Tag"
              >
              </v-text-field>
          </v-col>
          <v-col cols="6">
              <label class="mb-3">Meta description</label>
              <v-textarea
                      solo
                      v-model="metaData.metaDescription"
                      label="meta description"
                      counter
                      :rules="[v => v.length <= 160 || 'Meta description recommended  not to be more than 160 characters ',
                        v => v.length >= 50 || 'Meta description recommended  to be more than 50 characters '
                      ]"
              >
              </v-textarea>
          </v-col>
      </v-row>
  </div>
</template>

<script>
    export default {
        name: "page-meta",
        props: {
            metaData: {
                type: Object,
                default: ()=> {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
.meta-data {
    background: #eeeeee;
}
</style>