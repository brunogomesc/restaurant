<template>
  <div class="cart">
      <router-link to="/" class="cart--go-back" v-if="isSmallScreens()">←️ Voltar</router-link>
      <h2 class="cart--title">Seu pedido</h2>
      <p v-if="hasNoItem">Seu carrinho está vazio</p>
      <CartItem v-for="item in cartList" :key="item.id" :item="item"/>
      <div class="cart--total" v-if="!hasNoItem">
          <span>Total: </span>
          <span class="price">{{getCartTotal | currency}}</span>
      </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
import {mapGetters} from 'vuex'
import Mixin from '@/mixins/mixins'

export default {
    name: 'Cart',
    mixins: [Mixin],
    components: {
        CartItem
    },
    filters: {
        currency(value) {
            return `R$ ${value.toLocaleString('pt-br',{minimumFractionDigits: 2})}`
        }
    },
    computed: {
        ...mapGetters([
            'getCartTotal'
        ]),
        cartList() {
            return this.$store.state.cartList;
        },
        hasNoItem() {
            return !this.cartList.length;
        }
    }
}
</script>

<style lang="less" scoped>
    .cart {
        background: white;
        min-width: 600px;
        width: 600px;
        padding: 30px 30px 100px 30px;
        height: 100vh;
        display: flex;
        flex-direction: column;

        &--go-back {
            font-weight: 600;
            font-size: 18px;
            text-decoration: none;
            color: black;
        }

        &--title {
            font-weight: 600;
            font-size: 24px;
            margin-top: 50px;
        }

        &--total {
            font-weight: 600;
            font-size: 18px;
            text-align: right;
            margin-top: 30px;

            .price {
                color: @yellow;
                padding-left: 10px;
            }
        }

        @media @tablets {
            width: 100%;
            min-width: unset;
            padding: 50px 20px 20px;
        }
    }
</style>