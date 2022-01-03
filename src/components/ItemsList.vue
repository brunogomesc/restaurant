<template>
    <div class="items-list">
         <Item 
            v-for="item in itemsList" :key="item.id" :item="item"
        />
    </div>
</template>

<script>
import axios from 'axios';
import Item from './Item.vue'

export default {
    name: 'ItemsList',
    components: {
        Item
    },
    data() {
        return {
            itemsList: []
        }
    },
    created() {
        axios.get('http://localhost:3000/burguers').then( response => {
        this.itemsList = response.data;
    })
  }
}
</script>

<style lang="less" scoped>
    .items-list {
        display: flex;
        margin: 50px;
    }
</style>