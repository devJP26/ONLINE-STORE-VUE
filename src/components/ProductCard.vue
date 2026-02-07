<template>
  <div class="card"> 
    <div class="product-image-container">
      <img :src="product.imageUrl" alt="Product Image" class="product-image"  @click="goToPDP"/>
    </div>
    <div class="product-details-section">
      <strong class="product-title">{{ product.name }}</strong>
      <div class="product-footer">
        <p class="product-price">${{ product.price }}</p>
        <a class="cart-button" @click="addToCart">
          <svg _ngcontent-ng-c34010421="" fill="currentColor" id="Cart" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 902.86 902.86" xml:space="preserve"><g _ngcontent-ng-c34010421=""><g _ngcontent-ng-c34010421=""><path _ngcontent-ng-c34010421="" d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
               M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path><path _ngcontent-ng-c34010421="" d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
              c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
              c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
              C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
              c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
               M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
              S619.162,694.432,619.162,716.897z"></path></g></g></svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue';
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cartStore';
interface ProductValue {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}
export default {
  props: {
    product: {
      type: Object as PropType<ProductValue>,
      required: true
    }
  },
  setup(props) {
    const router  = useRouter();
    const cart = useCartStore();
    const addToCart = () => {
      cart.addToCart(props.product);
    }
    const goToPDP = () => {
      router.push(`/products/${props.product.id}`)
    }
    return {
      addToCart,
      goToPDP
    }
  }
}
</script>
<style scoped>
.card {
  height: 340px;                 
  border: 3px solid #ddd;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
}
.product-image-container {
  height: 180px;                 /* Fixed image area */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  padding: 10px;
  cursor: pointer;
}
.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.card:hover {
  border-color: rgba(0, 155, 145, 1);
}
.product-details-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 20px;
  gap: 10px;
  color: #009b91;
  background-color: #dadada;
  font-size: 12px;
  flex: 1;
}
.product-details-section strong {
  font-size: 14px;
  margin: 0;
}
.cart-button {
  display: block;
  width: 20px;
  height: 20px;
  color: rgba(0, 155, 145, 1);
  cursor: pointer;
}
.product-title {
  font-size: 16px;
  margin: 8px 0;
  text-align: left;
}
.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-price {
  margin: 0;
}
</style>