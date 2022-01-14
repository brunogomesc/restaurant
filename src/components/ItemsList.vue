<template>
    <div class="items-list">
        <Loading v-if="isLoading"/>
         <Item 
            v-for="item in itemsList" :key="item.id" :item="item"
        />
    </div>
</template>

<script>
import axios from 'axios';
import Item from './Item.vue'
import Loading from './Loading.vue'

export default {
    name: 'ItemsList',
    components: {
        Item,
        Loading
    },
    data() {
        return {
            itemsList: [],
            isLoading: false
        }
    },
    created() {
        this.getItemsList();
    },
    computed: {
        selectedCategory() {
            return this.$store.state.selectedCategory;
        }
    },
    methods: {
        getItemsList(){
            this.isLoading = true;
            this.itemsList = [];
            setTimeout(() => {
                 axios.get(`http://localhost:3000/${this.selectedCategory}`).then( response => {
                    this.itemsList = response.data;
                    this.isLoading = false;
                 })
            },1000)
        }
    },
    watch: {
        selectedCategory() {
            this.getItemsList();
        }
    }
}
</script>

<style lang="less" scoped>
    .items-list {
        display: flex;
        margin: 50px;
        width: 100%;
        flex-wrap: wrap;
        align-content: flex-start;

        @media @tablets {
            flex-wrap: wrap;
            margin: 0px;
            padding: 20px;
        }
    }
</style>