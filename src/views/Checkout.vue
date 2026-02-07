<template>
  <div class="checkout">
    <h4>Checkout</h4>
    <div v-if="cart.items.length === 0">
      Cart is empty
    </div>
    <div v-else class="cart-container">
      <div v-for="item in cart.items" :key="item.id" class="cart-items">
        <div class="cart-product-info">
          <img :src="item.imageUrl" alt="Product Image" width="100" height="100"/>
          <p>{{ item.name }}</p>
        </div>
        <div class="cart-price-action">
          <p>${{ item.price }}</p>
          <button class="empty-button" @click="cart.removeFromCart(item.id)">X</button>
        </div>
      </div>
      <p class="total-price">Total Price: ${{ totalPrice }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../store/cartStore';
export default {
  setup() {
    const cart = useCartStore();
    const totalPrice = computed(() => cart.totalPrice);
    return {
      cart,
      totalPrice: totalPrice
    }
  }
}
</script>
<style scoped>
.checkout {
  padding: 16px;
  text-align: left;
}
.cart-items {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
  justify-content: space-between;
}
.cart-product-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cart-price-action {
  display: flex;
  align-items: center;
  gap: 8px;
}
.total-price {
  font-weight: 500;
  font-size: 1.2em;
  text-align: right;
}
</style>