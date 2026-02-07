<template>
  <div v-if="product" class="pdp-main">
    <button class="empty-button" @click="router.back()">Back</button>
    <div class="pdp-container">
      <img :src="product.imageUrl" alt="Product Image" class="product-image" width="250" height="250"/>
      <div class="product-info">
        <div class="product-details">
          <h4 class="product-title">{{ product.name }}</h4>
          <p class="product-description">{{ categoryTitleMap[product.category] }}</p>
          <p class="product-price">${{ product.price }}</p>
        </div>
        <div class="product-action">
          <a class="cart-button" @click="addToCart">
          <svg _ngcontent-ng-c34010421="" fill="currentColor" id="Cart" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 902.86 902.86" xml:space="preserve"><g _ngcontent-ng-c34010421=""><g _ngcontent-ng-c34010421=""><path _ngcontent-ng-c34010421="" d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
               M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path><path _ngcontent-ng-c34010421="" d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
              c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
              c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
              C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
              c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
               M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
              S619.162,694.432,619.162,716.897z"></path></g></g></svg>
              <span>Add to Cart</span>
        </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cartStore';
import Products from '../data/products.json'
export default {
  setup() {
    const router = useRouter();
    const productId = router.currentRoute.value.params.id
    const product = Products.find(p => p.id === productId);
    const cart = useCartStore();
    const categoryTitleMap: Record<string, string> = {
      machine_roller: 'Rollers',
      machine_sorter: 'Optical Sorters',
      machine_dryer: 'Dryers',
      machine_die_casting: 'Die Casting Machines'
    }
    const addToCart = () => {
      if (product) {
        cart.addToCart(product);
      }
    }
    return {
      router,
      product,
      categoryTitleMap,
      addToCart
    }
  }
}
</script>
<style scoped>
.pdp-main {
  text-align: left;
  padding: 15px;
}
.pdp-container {
  display: flex;
  align-items: flex-start;
  margin: 15px 0;
}
.product-title {
  margin: 0 0 8px;
}
.product-info {
  margin-left: 30px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-button {
  color: rgba(0, 155, 145, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
}
.cart-button svg{
  width: 20px;
  height: 20px;
}
</style>