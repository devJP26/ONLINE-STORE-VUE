<template>
  <header class="header">
    <div class="lgo">
      <img src="../assets/logos/buhler-logo.svg" alt="Logo" class="logo" @click="goHome()" width="100px"/>
    </div>
    <div class="timer">
      <span class="timer-text"> {{ currentTime }}</span>
    </div>
    <div class="cart">
      <span class="cart-count" @click="goCart"> CART {{ cartCount }}</span>
    </div>
  </header>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { useCartStore } from '../store/cartStore';
export default {
  setup() {
    const cartCount = computed(() => cart.itemCount)
    const router = useRouter()
    const currentTime = ref('')
    const cart = useCartStore();
    const updateTime = () => {
      currentTime.value = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      })}`
    }
    onMounted(() => {
      updateTime()
      setInterval(updateTime, 1000)
    })
    const goHome = () => {
      router.push('/')
    }
    const goCart = () => {
      router.push('/checkout')
    }
    console.log(cart, 'CART')
    return {
      currentTime,
      goHome,
      goCart,
      cartCount: cartCount
      
    }
  }
}
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #2c3e50;
  color: white;
  width: 100%;
  box-sizing: border-box;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.cart {
  cursor: pointer;
}
</style>