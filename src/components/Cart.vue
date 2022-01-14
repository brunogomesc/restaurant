<template>
    <div class="cart">
        <router-link to="/" class="cart--go-back" v-if="isSmallScreens()">←️ Voltar</router-link>
        <h2 class="cart--title">Seu pedido</h2>
        <div class="cart--content">
            <p v-if="hasNoItem">Seu carrinho está vazio</p>
            <transition-group name="list">
                <CartItem v-for="item in cartList" :key="item.id" :item="item"/>
            </transition-group>
        </div>
         <div class="cart--total" v-if="!hasNoItem">
            <span>Total: </span>
            <span class="price">{{getCartTotal | currency}}</span>
        </div>
        <button class="primary-button payment button" @click="goToPayment">Finalizar Compra</button>
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
    },
    methods: {
        goToPayment() {
            this.$router.push({name: 'Payment'})
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

        &--content {
            flex-grow: 1;
            overflow: auto;
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

        .payment-button {
            width: 397px;
            margin: 20px auto;
        }

        .list-enter-active, .list-leave-active {
            transition: all 1s;
        }

        .list-enter, .list-leave-to {
            opacity: 0;
            transform: translateX(-30px);
        }

        @media @tablets {
            width: 100%;
            min-width: unset;
            padding: 50px 20px 20px;

            .payment-button {
                width: 100%;
            }
        }
    }
</style>