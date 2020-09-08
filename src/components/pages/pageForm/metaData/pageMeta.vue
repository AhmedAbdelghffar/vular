<template>
    <v-expansion-panels multiple :value="expand" >
      <v-expansion-panel>
        <v-expansion-panel-header>SEO SETTINGS</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <label class="mb-3">Title Tag</label>
            <v-text-field
              solo
              v-model="metaData.seo.titleTag"
              label="Title Tag"
            >
            </v-text-field>
          </div>
          <div>
            <label class="mb-3">Meta description</label>
            <v-textarea
              solo
              v-model="metaData.seo.metaDescription"
              label="meta description"
              counter
              :rules="[v => (v && v.length <= 160) || 'Meta description recommended not to be more than 160 characters ',
                        v => (v && v.length >= 50) || 'Meta description recommended  to be more than 50 characters '
                      ]"
            >
            </v-textarea>
          </div>
          <div>
            <label class="mb-3">Allow search engine to index page</label>
            <v-radio-group v-model="metaData.seo.allowIndexing" row>
              <v-radio
                label="Yes"
                :value="true"
              ></v-radio>
              <v-radio
                label="No"
                :value="false"
              ></v-radio>
            </v-radio-group>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
        },
        data() {
          return {
            expand: [1, 0]
          }
        }
    }
</script>

<style scoped>
.meta-data {
    background: #eeeeee;
}
</style>
