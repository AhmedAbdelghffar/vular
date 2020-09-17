<template>
    <v-card>
        <v-card-title
            class="primary white--text"
            primary-title
        >
            Add Component
        </v-card-title>
        <v-card-text class="pa-5 d-flex align-center row">
            <div
                v-for="(item,index) in componentsList"
                :key="index"
                class="text-center component-add-box"
                @click="addComponent(item)"
            >
                <v-icon>{{item.icon}}</v-icon>
                <p class="mb-0">{{item.name}}</p>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    import componentsList from "../../../../../utils/componentsList";
    export default {
        name: "componentList",
        data() {
            return {
                componentsList
            }
        },
        methods: {
            addComponent(item) {
                this.$emit('addComponent', item)
            }
        }
    }
</script>

<style scoped lang="scss">
    .component-add-box {
        border: 1px solid #eee;
        padding: 10px;
        width: 132px;
        cursor: pointer;
        p{
            color: black;
            margin-top: 5px;
        }
    }
    .component-add-box:hover {
        /*background:#F8FDFF ;*/
        background: #eeeeee;
    }
</style>
