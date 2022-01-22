<template>
  <div class="payment">
    <div class="payment--content">
      <router-link to="/" class="payment--go-back">←️ Voltar</router-link>
      <Order/>
    </div>
    <Cart v-if="isDesktop()"/>
  </div>
</template>

<script>
import Cart from '../components/Cart.vue'
import Mixin from '@/mixins/mixins'
import Order from '../components/Order.vue'
export default {
  components: {
    Cart,
    Order
  },
  mixins: [Mixin]
}
</script>

<style lang="less" scoped>
  .payment {
    display: flex;
    
    &--content {
      flex-grow: 1;

      .payment--go-back {
        padding: 20px 20px;
        font-weight: 600;
        font-size: 18px;
        text-decoration: none;
        color: black;
      }
    }

    @media @tablets {
      &--content {
        padding: 50px 20px;
      }          
    }
  }
</style>