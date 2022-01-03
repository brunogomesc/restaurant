<template>
    <div class="item">
        <div class="item--tag" v-if="item.offer">Oferta</div>
        <img class="item--img" src="../assets/images/burguer.png" alt="Burguer">
        <h2 class="item--name">{{item.name}}</h2>
        <p class="item--description">{{item.description}}</p>
        <p class="item--price">{{item.price | currency}}</p>
    </div>
</template>

<script>
export default {
    name: 'Item',
    filters: {
        currency(value) {
            return `R$ ${value.toLocaleString('pt-br',{minimumFractionDigits: 2})}`
        }
    },
    props: {
        item: {}
    }
}
</script>

<style lang="less" scoped>
    .item {

        width: 215.95px;
        height: 290px;
        border-radius: 8px;
        background: white;
        position: relative;
        margin: 20px;
        padding: 20px;

        h2 {
            font-weight: 600;
            font-size: 18px;
        }

        &--description {
            color: @dark-grey;
            font-weight: 300;
            font-size: 12px;
            margin: 0;
        }

        &--price {
            color: @yellow;
            font-weight: 600;
            font-size: 18px;
            margin: 8px auto;
        }

        &--tag {
            position: absolute;
            border-radius: 8px;
            background: @pink;
            color: white;
            top: 15px;
            right: 15px;
            font-size: 12px;
            font-weight: 500;
            padding: 3px 8px;
        }

        &--img {
            display: block;
            margin: 20px auto 0px;
        }

        &--name {
            font-weight: 600;
            font-size: 18px;
            margin: 8px auto;
        }

    }
</style>